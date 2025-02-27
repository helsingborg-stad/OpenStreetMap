import { Map as LeafletMap } from 'leaflet';
import { ConfigOptions, MapEventCallback } from './types';
import { Addable } from './addableInterface';


export interface MapInterface extends Addable {
    getMap(): LeafletMap;
    flyTo(latlng: any, zoom?: number|null): void;
    getZoom(): number;
    addListener(event: string, callback: MapEventCallback): void;
    getOptions(): ConfigOptions;
}