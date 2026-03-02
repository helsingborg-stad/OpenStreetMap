import { AddTo } from "../../addToInterface";
import { Bindable } from "../../bindableInterface";
import { EventListenerInterface } from "../../eventListenerInterface";
import { LatLngBoundsObject, LatLngObject } from "../../types";

export interface ImageOverlayInterface extends AddTo, Bindable, EventListenerInterface {
    setPosition(latLngBounds: LatLngBoundsObject): ImageOverlayInterface;
    getPosition(): LatLngBoundsObject;
    getCenter(): LatLngObject;
    removeImageOverlay(): ImageOverlayInterface;
    setOpacity(opacity: number): ImageOverlayInterface;
    getElement(): HTMLElement | undefined;
}