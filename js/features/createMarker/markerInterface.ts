import { AddTo } from "../../addToInterface";
import { EventListenerInterface } from "../../eventListenerInterface";
import { LatLngObject } from "../../types";
import { IconOptions } from "./createMarkerInterface";

export interface MarkerInterface extends AddTo, EventListenerInterface {
    setPosition(position: LatLngObject): MarkerInterface;
    getPosition(): LatLngObject;
    removeMarker(): MarkerInterface;
    setIcon(iconOptions: IconOptions): MarkerInterface;
    getElement(): HTMLElement|undefined;
    isPopupOpen(): boolean;
}