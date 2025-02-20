import { LatLngObject, MapEvent, MapEventCallback } from "../../types";

export interface MarkerInterface {
    setPosition(position: LatLngObject): void;
    getPosition(): LatLngObject;
    removeMarker(): void;
    addListener(event: MapEvent, callback: MapEventCallback): void;
}