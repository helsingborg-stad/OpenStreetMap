import L, { Rectangle as LeafletRectangle } from "leaflet";
import { RectangleInterface } from "./rectangleInterface";
import { Addable } from "../../addableInterface";
import { LatLngBoundsObject, MapEvent, MapEventCallback } from "../../types";

export class Rectangle implements RectangleInterface {
    private listeners: { [key: string]: MapEventCallback[] } = {};

    constructor(private leafletRectangle: LeafletRectangle) {
        this.setupListeners();
    }

    public setPosition(latLngBoundsObject: LatLngBoundsObject): void {
        const southWest = L.latLng(latLngBoundsObject.southWest.lat, latLngBoundsObject.southWest.lng);
        const northEast = L.latLng(latLngBoundsObject.northEast.lat, latLngBoundsObject.northEast.lng);
        const bounds = L.latLngBounds(southWest, northEast);

        this.getRectangle().setBounds(bounds);
    }

    public getPosition(): LatLngBoundsObject {
        const bounds = this.getRectangle().getBounds();
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

    public addTo(addable: Addable): void {
        this.getRectangle().addTo(addable.getAddable());
    }

    public addListener(event: MapEvent, callback: MapEventCallback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    public removeRectangle(): void {
        this.getRectangle().remove();
    }

    private getRectangle(): LeafletRectangle {
        return this.leafletRectangle;
    }

    private setupListeners(): void {
        (["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "contextmenu", "preclick", "drag"] as MapEvent[]).forEach(event => {
             this.getRectangle().on(event, (e) => {
                 this.listeners[event]?.forEach((callback) => {
                     callback({
                        originalEvent: (e as any)?.originalEvent ?? null,
                        latLng: (e as any).latlng ?? null
                    });
                 });
             });
         });
     }
}