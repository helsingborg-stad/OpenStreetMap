import { Addable } from "@helsingborg-stad/openstreetmap/js/addableInterface";
import { EventListenerInterface } from "@helsingborg-stad/openstreetmap/js/eventListenerInterface";
import { LatLngObject } from "@helsingborg-stad/openstreetmap/js/types";

export interface MapInterface extends Addable, EventListenerInterface {
    flyTo(latlng: any, zoom?: number|null): MapInterface;
    getZoom(): number;
    setZoom(zoom: number): MapInterface;
    setView(latlng: LatLngObject, zoom: number): MapInterface;
    getCenter(): LatLngObject;
    invalidateSize(): MapInterface;
}