import { AddTo } from "@helsingborg-stad/openstreetmap/js/addToInterface";
import { Bindable } from "@helsingborg-stad/openstreetmap/js/bindableInterface";
import { EventListenerInterface } from "@helsingborg-stad/openstreetmap/js/eventListenerInterface";
import { LatLngObject } from "@helsingborg-stad/openstreetmap/js/types";
import { IconOptions } from "@helsingborg-stad/openstreetmap/js/features/createMarker/createMarkerInterface";

export interface MarkerInterface extends AddTo, Bindable, EventListenerInterface {
    setPosition(position: LatLngObject): MarkerInterface;
    getPosition(): LatLngObject;
    removeMarker(): MarkerInterface;
    setIcon(iconOptions: IconOptions): MarkerInterface;
    getElement(): HTMLElement | undefined;
    isPopupOpen(): boolean;
}