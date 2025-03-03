import L, { Rectangle as LeafletRectangle } from "leaflet";
import { RectangleInterface } from "./rectangleInterface";
import { Addable } from "../../addableInterface";
import { LatLngBoundsObject, MapEvent, MapEventCallback } from "../../types";

export class Rectangle implements RectangleInterface {
    private listeners: { [key: string]: MapEventCallback[] } = {};

    constructor(private leafletRectangle: LeafletRectangle) {
        this.setupListeners();
    }

    public setLatLngBounds(latLngBoundsObject: LatLngBoundsObject): void {
        const southWest = L.latLng(latLngBoundsObject.southWest.lat, latLngBoundsObject.southWest.lng);
        const northEast = L.latLng(latLngBoundsObject.northEast.lat, latLngBoundsObject.northEast.lng);
        const bounds = L.latLngBounds(southWest, northEast);

        this.getRectangle().setBounds(bounds);
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

    private getRectangle() {
        return this.leafletRectangle;
    }

    private setupListeners(): void {
        ( ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "contextmenu", "preclick"] as MapEvent[]).forEach(event => {
             this.getRectangle().on(event, (e) => {
                 this.listeners[event]?.forEach((callback) => {
                     callback(e);
                 });
             });
         });
     }
}