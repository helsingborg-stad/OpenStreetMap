import { EventData } from "./eventListenerInterface";

export type MapStyle = "dark"|"pale"|"default"|"color";

export type ConfigOptions = {
    id: string;
    keyboard?: boolean;
    center?: LatLngObject;
    zoom?: number;
    zoomControl?: boolean;
    scrollWheelZoom?: boolean;
}

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

export type Nullable<T> = T|null;