import { AddTo } from "../../addToInterface";
import { EventListenerInterface } from "../../eventListenerInterface";
import { LatLngBoundsObject, LatLngObject } from "../../types";

export interface ImageOverlayInterface extends AddTo, EventListenerInterface {
    setPosition(latLngBounds: LatLngBoundsObject): ImageOverlayInterface;
    getPosition(): LatLngBoundsObject;
    getCenter(): LatLngObject;
    removeImageOverlay(): ImageOverlayInterface;
    setOpacity(opacity: number): ImageOverlayInterface;
    getElement(): HTMLElement|undefined;
}