import { LatLngObject } from "@helsingborg-stad/openstreetmap/js/types";
import { MarkerInterface } from "@helsingborg-stad/openstreetmap/js/features/createMarker/markerInterface";

export type TooltipOptions = {
    content: HTMLElement|string;
    closeButton?: boolean;
    maxHeight?: number;
    maxWidth?: number;
    className?: string;
    offset?: [number, number];
}

export type IconOptions = {
    html: HTMLElement|string;
    className?: string;
    iconSize?: [number, number];
    iconAnchor?: [number, number];
}

export interface MarkerOptions extends IconOptions {
    position: LatLngObject;
    draggable?: boolean;
}

export interface CreateMarkerInterface {
    create(markerOptions: MarkerOptions, tooltipOptions?: null|TooltipOptions): MarkerInterface; 
}