import { Addable } from "../../addableInterface";
import { EventListenerInterface } from "../../eventListenerInterface";
import { LatLngObject } from "../../types";

export interface MapInterface extends Addable, EventListenerInterface {
    flyTo(latlng: any, zoom?: number|null): MapInterface;
    getZoom(): number;
    setZoom(zoom: number): MapInterface;
    setView(latlng: LatLngObject, zoom: number): MapInterface;
    getCenter(): LatLngObject;
}