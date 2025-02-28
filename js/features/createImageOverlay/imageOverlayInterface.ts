import { AddTo } from "../../addToInterface";
import { LatLngBoundsObject } from "../../types";

export interface ImageOverlayInterface extends AddTo {
    setLatLngBounds(latLngBounds: LatLngBoundsObject): void;
    removeImageOverlay(): void;
}