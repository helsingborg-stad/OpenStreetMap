import { LatLngObject } from "../../types";

export interface MarkerInterface {
    setPosition(position: LatLngObject): void;
    getPosition(): LatLngObject;
    removeMarker(): void;
}