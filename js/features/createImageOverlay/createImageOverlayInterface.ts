import { LatLngBoundsObject } from "../../types";
import { ImageOverlayInterface } from "./imageOverlayInterface";

export interface CreateImageOverlayInterface {
    create(url: string, latLngBounds: LatLngBoundsObject): ImageOverlayInterface;
}