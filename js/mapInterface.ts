import { Map as LeafletMap } from 'leaflet';
import { ConfigOptions, LatLngObject, MapEventCallback } from './types';
import { Addable } from './addableInterface';


export interface MapInterface extends Addable {
    getMap(): LeafletMap;
    flyTo(latlng: any, zoom?: number|null): void;
    getZoom(): number;
    getCenter(): LatLngObject;
    addListener(event: string, callback: MapEventCallback): void;
    getOptions(): ConfigOptions;
}