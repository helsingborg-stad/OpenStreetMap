import { LatLngBoundsObject } from "@helsingborg-stad/openstreetmap/js/types";
import { ImageOverlayInterface } from "@helsingborg-stad/openstreetmap/js/features/createImageOverlay/imageOverlayInterface";

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