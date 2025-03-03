export type MapStyle = "dark"|"pale"|"default"|"color";
export type AttributionPosition = "topleft"|"topright"|"bottomleft"|"bottomright";

export type ConfigOptions = {
    id: string;
    mapStyle: MapStyle;
    keyboard: boolean;
    attributionPosition: AttributionPosition;
    center: LatLngObject;
    zoom: number;
    maxZoom: number;
    minZoom: number;
    zoomControl: boolean;
    scrollWheelZoom: boolean;
}

export type PartialConfigOptions = { id: string } & Partial<Omit<ConfigOptions, 'id'>>;

export type MapEvent = "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick" | "drag";

export type MapEventCallback = (event: any) => void;

export type LatLngObject = {
    lat: number,
    lng: number
};

export type LatLngBoundsObject = {
    southWest: LatLngObject,
    northEast: LatLngObject
};

export type Nullable<T> = T|null;