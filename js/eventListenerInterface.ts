import { LatLngObject, InteractionEvent, InteractionEventCallback } from "@helsingborg-stad/openstreetmap/js/types";

export type EventData = {
    originalEvent?: any;
    latLng?: LatLngObject;
}

export interface EventListenerInterface {
    addListener(event: InteractionEvent, callback: InteractionEventCallback): void;
}