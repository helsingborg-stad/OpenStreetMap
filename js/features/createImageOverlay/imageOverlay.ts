import { Addable } from "../../addableInterface";
import { LatLngBoundsObject, LatLngObject, InteractionEvent, InteractionEventCallback } from "../../types";
import { ImageOverlayInterface } from "./imageOverlayInterface";
import L, { ImageOverlay as LeafletImageOverlay } from "leaflet";

export class ImageOverlay implements ImageOverlayInterface {
    private listeners: { [key: string]: InteractionEventCallback[] } = {};
    constructor(private leafletOverlay: LeafletImageOverlay) {
        this.setupListeners();
    }

    public addListener(event: InteractionEvent, callback: InteractionEventCallback): ImageOverlayInterface {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);

        return this;
    }

    public addTo(addable: Addable): ImageOverlayInterface {
        this.getImageOverlay().addTo(addable.getAddable());

        return this;
    }

    public setPosition(latLngBounds: LatLngBoundsObject): ImageOverlayInterface {
        const southWest = L.latLng(latLngBounds.southWest.lat, latLngBounds.southWest.lng);
        const northEast = L.latLng(latLngBounds.northEast.lat, latLngBounds.northEast.lng);
        const bounds = L.latLngBounds(southWest, northEast);

        this.getImageOverlay().setBounds(bounds);

        return this;
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

    public setOpacity(opacity: number): ImageOverlayInterface {
        this.getImageOverlay().setOpacity(opacity);

        return this;
    }

    public removeImageOverlay(): ImageOverlayInterface {
        this.getImageOverlay().remove();

        return this;
    }

    public getElement(): HTMLElement|undefined {
        return this.getImageOverlay().getElement();
    }

    private getImageOverlay() {
        return this.leafletOverlay;
    }

    private setupListeners(): void {
        ( ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove"] as InteractionEvent[]).forEach(event => {
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