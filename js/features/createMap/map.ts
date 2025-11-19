import { Map as LeafletMap } from 'leaflet';
import { MapInterface } from './mapInterface';
import { LatLngObject, InteractionEvent, InteractionEventCallback } from '../../types';

export class Map implements MapInterface {
    private listeners: { [key: string]: InteractionEventCallback[] } = {};

    constructor(private leafletMap: LeafletMap) {
        this.setupListeners();
    }

    public addListener(event: InteractionEvent, callback: InteractionEventCallback): MapInterface {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);

        return this;
    }

    public flyTo(latlng: LatLngObject, zoom: number|null = null): MapInterface {
        this.getMap().flyTo(latlng, zoom ?? this.getZoom());

        return this;
    }

    public getZoom() {
        return this.getMap().getZoom();
    }

    public setZoom(zoom: number): MapInterface {
        this.getMap().setZoom(zoom);

        return this;
    }

    public getCenter(): LatLngObject {
        return this.getMap().getCenter();
    }

    public setView(latlng: LatLngObject, zoom: number): MapInterface {
        this.getMap().setView(latlng, zoom);

        return this;
    }

    private getMap(): LeafletMap {
        return this.leafletMap;
    }

    public getAddable(): LeafletMap {
        return this.getMap();
    }

    public invalidateSize(): MapInterface {
        this.getMap().invalidateSize();

        return this;
    }

    private setupListeners(): void {
       (["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "contextmenu", "preclick"] as InteractionEvent[]).forEach(event => {
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