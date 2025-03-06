import { LatLngObject } from "../../types";
import { MarkerInterface } from "./markerInterface";

export type TooltipOptions = {
    content: HTMLElement|string;
    closeButton?: boolean;
    maxHeight?: number;
    maxWidth?: number;
    className?: string;
}

export type IconOptions = {
    icon: HTMLElement|string;
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