import { Map as LeafletMap } from 'leaflet';
import { ConfigOptions, LatLngObject, MapEventCallback } from './types';
import { Addable } from './addableInterface';
import { EventListenerInterface } from './eventListenerInterface';


export interface MapInterface extends Addable, EventListenerInterface {
    getMap(): LeafletMap;
    flyTo(latlng: any, zoom?: number|null): void;
    getZoom(): number;
    setZoom(zoom: number): void;
    getCenter(): LatLngObject;
    getOptions(): ConfigOptions;
}