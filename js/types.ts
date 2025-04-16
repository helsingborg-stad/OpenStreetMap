import { EventData } from "./eventListenerInterface";

export type MapEvent = "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick" | "drag" | "dragstart" | "dragend" | "popupopen" | "popupclose";

export type MapEventCallback = (event: EventData) => void;

export type ControlPosition = "topright" | "topleft" | "bottomright" | "bottomleft";

export type LatLngObject = {
    lat: number,
    lng: number
};

export type LatLngBoundsObject = {
    southWest: LatLngObject,
    northEast: LatLngObject
};

export type Nullable<T> = T|null;