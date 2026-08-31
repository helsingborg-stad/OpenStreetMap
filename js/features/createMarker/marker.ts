import L, { Marker as LeafletMarker, Map as LeafletMap, LayerGroup, icon, Layer } from 'leaflet';
import { LatLngObject, InteractionEvent, InteractionEventCallback } from "@helsingborg-stad/openstreetmap/js/types";
import { MarkerInterface } from "@helsingborg-stad/openstreetmap/js/features/createMarker/markerInterface";
import { Addable } from "@helsingborg-stad/openstreetmap/js/addableInterface";
import { IconOptions } from '@helsingborg-stad/openstreetmap/js/features/createMarker/createMarkerInterface';

export class Marker implements MarkerInterface {
    private listeners: { [key: string]: InteractionEventCallback[] } = {};

    constructor(private marker: LeafletMarker) {
        this.setupListeners();
    }

    public addTo(addable: Addable): MarkerInterface {
        this.getMarker().addTo(addable.getAddable());
        return this;
    }

    public getBindable(): Layer {
        return this.getMarker();
    }

    public addListener(event: InteractionEvent, callback: InteractionEventCallback): MarkerInterface {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
        return this;
    }

    public setPosition(position: LatLngObject): MarkerInterface {
        this.marker.setLatLng(position);
        return this;
    }

    public getPosition(): LatLngObject {
        return this.marker.getLatLng();
    }

    public removeMarker(): MarkerInterface {
        this.getMarker().remove();
        return this;
    }

    private getMarker(): LeafletMarker {
        return this.marker;
    }

    public getElement(): HTMLElement | undefined {
        return this.marker.getElement();
    }

    public setIcon(iconOptions: IconOptions): MarkerInterface {
        this.marker.setIcon(L.divIcon(iconOptions));
        return this;
    }

    public isPopupOpen(): boolean {
        return this.marker.isPopupOpen();
    }

    private setupListeners(): MarkerInterface {
        (["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "contextmenu", "preclick", "drag", "dragend", "dragstart", "popupopen", "popupclose"] as InteractionEvent[]).forEach(event => {
            this.marker.on(event, (e) => {
                this.listeners[event]?.forEach((callback) => {
                    callback({
                        originalEvent: (e as any)?.originalEvent ?? null,
                        latLng: (e as any).latlng ?? this.getPosition()
                    });
                });
            });
        });

        return this;
    }
}