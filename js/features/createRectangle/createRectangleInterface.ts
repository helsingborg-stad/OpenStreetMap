import { LatLngBoundsObject } from "../../types";
import { RectangleInterface } from "./rectangleInterface";

export type RectangleOptions = {
    stroke?: boolean;
    color?: string;
    weight?: number;
    opacity?: number;
    fill?: boolean;
    fillColor?: string;
    fillOpacity?: number;
    className?: string;
}

export interface CreateRectangleInterface {
    create(latLngBounds: LatLngBoundsObject, rectangleOptions?: RectangleOptions): RectangleInterface;
}