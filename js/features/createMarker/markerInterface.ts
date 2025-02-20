import { LatLngObject, MapEventCallback } from "../../types";

export interface MarkerInterface {
    setPosition(position: LatLngObject): void;
    getPosition(): LatLngObject;
    removeMarker(): void;
    addListener(event: string, callback: MapEventCallback): void;
}