import { AddTo } from "../../addToInterface";
import { Bindable } from "../../bindableInterface";
import { EventListenerInterface } from "../../eventListenerInterface";
import { LatLngBoundsObject } from "../../types";

export interface RectangleInterface extends AddTo, EventListenerInterface, Bindable {
    setPosition(latLngBoundsObject: LatLngBoundsObject): RectangleInterface;
    getPosition(): LatLngBoundsObject;
    removeRectangle(): RectangleInterface;
}