import { AddTo } from "../../addToInterface";
import { EventListenerInterface } from "../../eventListenerInterface";
import { LatLngBoundsObject } from "../../types";

export interface RectangleInterface extends AddTo, EventListenerInterface {
    setLatLngBounds(latLngBoundsObject: LatLngBoundsObject): void;
    removeRectangle(): void;
}