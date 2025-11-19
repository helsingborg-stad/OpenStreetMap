import { LatLngObject, InteractionEvent, InteractionEventCallback } from "./types";

export type EventData = {
    originalEvent?: any;
    latLng?: LatLngObject;
}

export interface EventListenerInterface {
    addListener(event: InteractionEvent, callback: InteractionEventCallback): void;
}