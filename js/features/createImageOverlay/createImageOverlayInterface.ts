import { LatLngBoundsObject } from "../../types";
import { ImageOverlayInterface } from "./imageOverlayInterface";

export type ImageOverlayOptions =  {
    url: string;
    bounds: LatLngBoundsObject;
    opacity?: number;
    alt?: string;
    className?: string;
    interactive?: boolean;
}

export interface CreateImageOverlayInterface {
    create(imageOverlayOptions: ImageOverlayOptions): ImageOverlayInterface;
}