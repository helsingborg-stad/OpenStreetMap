import { AddTo } from "../../addToInterface";
import { LatLngBoundsObject } from "../../types";

export interface ImageOverlayInterface extends AddTo {
    setPosition(latLngBounds: LatLngBoundsObject): void;
    getPosition(): LatLngBoundsObject;
    removeImageOverlay(): void;
}