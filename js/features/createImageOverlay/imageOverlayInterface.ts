import { AddTo } from "../../addToInterface";
import { LatLngBoundsObject, LatLngObject } from "../../types";

export interface ImageOverlayInterface extends AddTo {
    setPosition(latLngBounds: LatLngBoundsObject): void;
    getPosition(): LatLngBoundsObject;
    getCenter(): LatLngObject;
    removeImageOverlay(): void;
}