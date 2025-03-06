import { LatLngObject } from "../../types";
import { MarkerInterface } from "./markerInterface";

export type TooltipOptions = {
    content: HTMLElement|string;
    closeButton?: boolean;
    maxHeight?: number;
    maxWidth?: number;
    className?: string;
}

export type MarkerOptions = {
    position: LatLngObject;
    icon: HTMLElement|string;
    className?: string;
    draggable?: boolean;
    iconSize?: [number, number];
    iconAnchor?: [number, number];
}

export interface CreateMarkerInterface {
    create(markerOptions: MarkerOptions, tooltipOptions?: null|TooltipOptions): MarkerInterface; 
}