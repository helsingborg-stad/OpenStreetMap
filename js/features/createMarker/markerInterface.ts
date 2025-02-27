import { AddTo } from "../../addToInterface";
import { LatLngObject, MapEvent, MapEventCallback } from "../../types";
import { Marker as LeafletMarker} from 'leaflet';

export interface MarkerInterface extends AddTo {
    setPosition(position: LatLngObject): void;
    getPosition(): LatLngObject;
    removeMarker(): void;
    addListener(event: MapEvent, callback: MapEventCallback): void;
    getMarker(): LeafletMarker;
    setIcon(html: string, className?: string): void;
}