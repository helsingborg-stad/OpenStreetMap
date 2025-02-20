import { MapInterface } from "../../mapInterface";
import L, { Marker as LeafletMarker } from 'leaflet';
import { LatLngObject, MapEvent, MapEventCallback } from "../../types";
import { MarkerInterface } from "./markerInterface";

class Marker implements MarkerInterface {
    private listeners: { [key: string]: MapEventCallback[] } = {};

    constructor(private mapInstance: MapInterface, private marker: LeafletMarker) {
        this.setupListeners();
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

    public removeMarker() {
        this.mapInstance.getMap().removeLayer(this.marker);
    }

    private setupListeners(): void {
        ( ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "contextmenu", "preclick"] as MapEvent[]).forEach(event => {
            this.marker.on(event, (e) => {
                this.listeners[event]?.forEach((callback) => {
                    callback(e);
                });
            });
        });
    }
}

export default Marker;