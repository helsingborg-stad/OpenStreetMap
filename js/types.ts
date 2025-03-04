import { EventData } from "./eventListenerInterface";
import { MarkerInterface } from "./features/createMarker/markerInterface";
import { RectangleInterface } from "./features/createRectangle/rectangleInterface";
import { MapInterface } from "./mapInterface";

export type MapStyle = "dark"|"pale"|"default"|"color";
export type AttributionPosition = "topleft"|"topright"|"bottomleft"|"bottomright";

export type ConfigOptions = {
    id: string;
    mapStyle?: MapStyle;
    keyboard?: boolean;
    attributionPosition?: AttributionPosition;
    center?: LatLngObject;
    zoom?: number;
    maxZoom?: number;
    minZoom?: number;
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