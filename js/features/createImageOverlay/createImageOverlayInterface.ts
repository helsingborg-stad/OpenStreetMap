import { LatLngBoundsObject } from "../../types";
import { ImageOverlayInterface } from "./imageOverlayInterface";

export type ImageOverlayOptions =  {
    opacity?: number;
    alt?: string;
    className?: string;
    interactive?: boolean;
}

export interface CreateImageOverlayInterface {
    create(url: string, latLngBounds: LatLngBoundsObject, imageOverlayOptions?: ImageOverlayOptions): ImageOverlayInterface;
}