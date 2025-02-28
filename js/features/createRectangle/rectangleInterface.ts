import { AddTo } from "../../addToInterface";
import { LatLngBoundsObject } from "../../types";

export interface RectangleInterface extends AddTo {
    setLatLngBounds(latLngBoundsObject: LatLngBoundsObject): void;
}