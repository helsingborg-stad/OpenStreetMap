import { AddTo } from "../../addToInterface";
import { EventListenerInterface } from "../../eventListenerInterface";
import { LatLngObject } from "../../types";
import { IconOptions } from "./createMarkerInterface";

export interface MarkerInterface extends AddTo, EventListenerInterface {
    setPosition(position: LatLngObject): void;
    getPosition(): LatLngObject;
    removeMarker(): void;
    setIcon(iconOptions: IconOptions): void;
    getElement(): HTMLElement|undefined;
    isPopupOpen(): boolean;
}