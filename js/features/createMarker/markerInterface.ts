import { AddTo } from "../../addToInterface";
import { Bindable } from "../../bindableInterface";
import { EventListenerInterface } from "../../eventListenerInterface";
import { LatLngObject } from "../../types";
import { IconOptions } from "./createMarkerInterface";

export interface MarkerInterface extends AddTo, Bindable, EventListenerInterface {
    setPosition(position: LatLngObject): MarkerInterface;
    getPosition(): LatLngObject;
    removeMarker(): MarkerInterface;
    setIcon(iconOptions: IconOptions): MarkerInterface;
    getElement(): HTMLElement | undefined;
    isPopupOpen(): boolean;
}