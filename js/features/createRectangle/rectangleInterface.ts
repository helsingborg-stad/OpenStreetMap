import { AddTo } from "../../addToInterface";
import { EventListenerInterface } from "../../eventListenerInterface";
import { LatLngBoundsObject } from "../../types";

export interface RectangleInterface extends AddTo, EventListenerInterface {
    setPosition(latLngBoundsObject: LatLngBoundsObject): RectangleInterface;
    getPosition(): LatLngBoundsObject;
    removeRectangle(): RectangleInterface;
}