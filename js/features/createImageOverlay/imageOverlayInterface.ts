import { AddTo } from "@helsingborg-stad/openstreetmap/js/addToInterface";
import { Bindable } from "@helsingborg-stad/openstreetmap/js/bindableInterface";
import { EventListenerInterface } from "@helsingborg-stad/openstreetmap/js/eventListenerInterface";
import { LatLngBoundsObject, LatLngObject } from "@helsingborg-stad/openstreetmap/js/types";

export interface ImageOverlayInterface extends AddTo, Bindable, EventListenerInterface {
    setPosition(latLngBounds: LatLngBoundsObject): ImageOverlayInterface;
    getPosition(): LatLngBoundsObject;
    getCenter(): LatLngObject;
    removeImageOverlay(): ImageOverlayInterface;
    setOpacity(opacity: number): ImageOverlayInterface;
    getElement(): HTMLElement | undefined;
}