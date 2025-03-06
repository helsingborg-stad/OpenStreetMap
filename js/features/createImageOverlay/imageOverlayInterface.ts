import { AddTo } from "../../addToInterface";
import { EventListenerInterface } from "../../eventListenerInterface";
import { LatLngBoundsObject, LatLngObject } from "../../types";

export interface ImageOverlayInterface extends AddTo, EventListenerInterface {
    setPosition(latLngBounds: LatLngBoundsObject): void;
    getPosition(): LatLngBoundsObject;
    getCenter(): LatLngObject;
    removeImageOverlay(): void;
    getElement(): HTMLElement|undefined;
}