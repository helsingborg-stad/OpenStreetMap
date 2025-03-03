import L, { Marker as LeafletMarker,  Map as LeafletMap, LayerGroup } from 'leaflet';
import { LatLngObject, MapEvent, MapEventCallback } from "../../types";
import { MarkerInterface } from "./markerInterface";
import { Addable } from "../../addableInterface";

class Marker implements MarkerInterface {
    private listeners: { [key: string]: MapEventCallback[] } = {};

    constructor(private marker: LeafletMarker) {
        this.setupListeners();
    }

    public addTo(addable: Addable): void {
        this.getMarker().addTo(addable.getAddable());
    }

    public addListener(event: MapEvent, callback: MapEventCallback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    public setPosition(position: LatLngObject) {
        this.marker.setLatLng(position);
    }

    public getPosition(): LatLngObject {
        return this.marker.getLatLng();
    }

    public removeMarker(): void {
        this.getMarker().remove();
    }

    public getMarker(): LeafletMarker {
        return this.marker;
    }

    public setIcon(html: string, className: string = ''): void {
        this.marker.setIcon(L.divIcon({
            className: className,
            html: html
        }));
    }

    private setupListeners(): void {
        ( ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "contextmenu", "preclick", "drag"] as MapEvent[]).forEach(event => {
            this.marker.on(event, (e) => {
                this.listeners[event]?.forEach((callback) => {
                    callback(e);
                });
            });
        });
    }
}

export default Marker;