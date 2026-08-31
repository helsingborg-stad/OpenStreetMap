import { LatLngBoundsObject } from "@helsingborg-stad/openstreetmap/js/types";
import { RectangleInterface } from "@helsingborg-stad/openstreetmap/js/features/createRectangle/rectangleInterface";

export type RectangleOptions = {
    stroke?: boolean;
    color?: string;
    weight?: number;
    opacity?: number;
    fill?: boolean;
    fillColor?: string;
    fillOpacity?: number;
    className?: string;
    interactive?: boolean;
}

export interface CreateRectangleInterface {
    create(latLngBounds: LatLngBoundsObject, rectangleOptions?: RectangleOptions): RectangleInterface;
}