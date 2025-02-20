import { Map as LeafletMap } from 'leaflet';
import { ConfigOptions, MapEventCallback } from './types';


export interface MapInterface {
    getMap(): LeafletMap;
    addListener(event: string, callback: MapEventCallback): void;
    getOptions(): ConfigOptions;
}