import { AddTo } from "../../addToInterface";
import { EventListenerInterface } from "../../eventListenerInterface";
import { LatLngBoundsObject } from "../../types";

export interface RectangleInterface extends AddTo, EventListenerInterface {
    setPosition(latLngBoundsObject: LatLngBoundsObject): void;
    getPosition(): LatLngBoundsObject;
    removeRectangle(): void;
}