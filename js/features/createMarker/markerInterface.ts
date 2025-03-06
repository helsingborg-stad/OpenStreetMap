import { AddTo } from "../../addToInterface";
import { EventListenerInterface } from "../../eventListenerInterface";
import { LatLngObject, MapEvent, MapEventCallback } from "../../types";
import { Marker as LeafletMarker} from 'leaflet';

export interface MarkerInterface extends AddTo, EventListenerInterface {
    setPosition(position: LatLngObject): void;
    getPosition(): LatLngObject;
    removeMarker(): void;
    setIcon(html: string, className?: string): void;
    getElement(): HTMLElement|undefined;
}