import { MapEvent, MapEventCallback } from "./types";

export interface EventListenerInterface {
    addListener(event: MapEvent, callback: MapEventCallback): void;
}