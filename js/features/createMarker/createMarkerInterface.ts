import { LatLngObject } from "../../types";

export type MarkerOptions = {
    position: LatLngObject;
    icon: HTMLElement|string;
    className?: string;
}

export interface CreateMarkerInterface {
    create(markerOptions: MarkerOptions): void; 
}