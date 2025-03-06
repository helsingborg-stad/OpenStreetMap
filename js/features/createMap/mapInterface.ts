import { Addable } from "../../addableInterface";
import { EventListenerInterface } from "../../eventListenerInterface";
import { LatLngObject } from "../../types";

export interface MapInterface extends Addable, EventListenerInterface {
    flyTo(latlng: any, zoom?: number|null): void;
    getZoom(): number;
    setZoom(zoom: number): void;
    setView(latlng: LatLngObject, zoom: number): void;
    getCenter(): LatLngObject;
}