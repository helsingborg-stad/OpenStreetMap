import { LatLngObject, MapEvent, MapEventCallback } from "./types";

export type EventData = {
    originalEvent?: any;
    latLng?: LatLngObject;
}

export interface EventListenerInterface {
    addListener(event: MapEvent, callback: MapEventCallback): void;
}