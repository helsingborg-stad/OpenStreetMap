import { EventData } from "./eventListenerInterface";

export type MapStyle = "dark"|"pale"|"default"|"color";

export type MapEvent = "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick" | "drag" | "dragstart" | "dragend";

export type MapEventCallback = (event: EventData) => void;

export type LatLngObject = {
    lat: number,
    lng: number
};

export type LatLngBoundsObject = {
    southWest: LatLngObject,
    northEast: LatLngObject
};

export type Tiles = {
    url: string,
    attribution: string
}

export type Nullable<T> = T|null;