import { Map as LeafletMap } from 'leaflet';
import { MapInterface } from './mapInterface';
import { LatLngObject, MapEvent, MapEventCallback } from '../../types';

export class Map implements MapInterface {
    private listeners: { [key: string]: MapEventCallback[] } = {};

    constructor(private leafletMap: LeafletMap) {
        this.setupListeners();
    }

    public addListener(event: MapEvent, callback: MapEventCallback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    public flyTo(latlng: LatLngObject, zoom: number|null = null) {
        this.getMap().flyTo(latlng, zoom ?? this.getZoom());
    }

    public getZoom() {
        return this.getMap().getZoom();
    }

    public setZoom(zoom: number) {
        this.getMap().setZoom(zoom);
    }

    public getCenter(): LatLngObject {
        return this.getMap().getCenter();
    }

    public setView(latlng: LatLngObject, zoom: number) {
        this.getMap().setView(latlng, zoom);
    }

    private getMap(): LeafletMap {
        return this.leafletMap;
    }

    public getAddable(): LeafletMap {
        return this.getMap();
    }

    private setupListeners(): void {
       (["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "contextmenu", "preclick"] as MapEvent[]).forEach(event => {
            this.getMap().on(event, (e) => {
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