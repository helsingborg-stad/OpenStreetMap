import L, { Marker as LeafletMarker,  Map as LeafletMap, LayerGroup, icon } from 'leaflet';
import { LatLngObject, MapEvent, MapEventCallback } from "../../types";
import { MarkerInterface } from "./markerInterface";
import { Addable } from "../../addableInterface";
import { IconOptions } from './createMarkerInterface';

export class Marker implements MarkerInterface {
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

    private getMarker(): LeafletMarker {
        return this.marker;
    }

    public getElement(): HTMLElement|undefined {
        return this.marker.getElement();
    }

    public setIcon(iconOptions: IconOptions): void {
        this.marker.setIcon(L.divIcon(iconOptions));
    }

    public isPopupOpen(): boolean {
        return this.marker.isPopupOpen();
    }

    private setupListeners(): void {
        ( ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "contextmenu", "preclick", "drag", "dragend", "dragstart", "popupopen", "popupclose"] as MapEvent[]).forEach(event => {
            this.marker.on(event, (e) => {
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