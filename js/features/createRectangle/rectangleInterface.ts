import { AddTo } from "@helsingborg-stad/openstreetmap/js/addToInterface";
import { Bindable } from "@helsingborg-stad/openstreetmap/js/bindableInterface";
import { EventListenerInterface } from "@helsingborg-stad/openstreetmap/js/eventListenerInterface";
import { LatLngBoundsObject } from "@helsingborg-stad/openstreetmap/js/types";

export interface RectangleInterface extends AddTo, EventListenerInterface, Bindable {
    setPosition(latLngBoundsObject: LatLngBoundsObject): RectangleInterface;
    getPosition(): LatLngBoundsObject;
    removeRectangle(): RectangleInterface;
}