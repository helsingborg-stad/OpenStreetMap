import { Addable } from "../../addableInterface";
import { LatLngBoundsObject, LatLngObject, MapEvent, MapEventCallback } from "../../types";
import { ImageOverlayInterface } from "./imageOverlayInterface";
import L, { ImageOverlay as LeafletImageOverlay } from "leaflet";

export class ImageOverlay implements ImageOverlayInterface {
    private listeners: { [key: string]: MapEventCallback[] } = {};
    constructor(private leafletOverlay: LeafletImageOverlay) {
        this.setupListeners();
    }

    public addListener(event: MapEvent, callback: MapEventCallback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    public addTo(addable: Addable): void {
        this.getImageOverlay().addTo(addable.getAddable());
    }

    public setPosition(latLngBounds: LatLngBoundsObject) {
        const southWest = L.latLng(latLngBounds.southWest.lat, latLngBounds.southWest.lng);
        const northEast = L.latLng(latLngBounds.northEast.lat, latLngBounds.northEast.lng);
        const bounds = L.latLngBounds(southWest, northEast);

        this.getImageOverlay().setBounds(bounds);
    }

    public getPosition(): LatLngBoundsObject {
        const bounds = this.getImageOverlay().getBounds();
        return {
            southWest: {
                lat: bounds.getSouthWest().lat,
                lng: bounds.getSouthWest().lng,
            },
            northEast: {
                lat: bounds.getNorthEast().lat,
                lng: bounds.getNorthEast().lng,
            }
        };
    }

    public getCenter(): LatLngObject {
        const bounds = this.getImageOverlay().getBounds();
        const center = bounds.getCenter();

        return {
            lat: center.lat,
            lng: center.lng,
        };
    }

    public removeImageOverlay(): void {
        this.getImageOverlay().remove();
    }

    private getImageOverlay() {
        return this.leafletOverlay;
    }

    private setupListeners(): void {
        ( ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove"] as MapEvent[]).forEach(event => {
            this.getImageOverlay().on(event, (e) => {
                this.listeners[event]?.forEach((callback) => {
                    callback({
                        originalEvent: (e as any)?.originalEvent ?? null,
                        latLng: (e as any).latlng ?? this.getPosition()
                    });
                });
            });
        });
    }
}