import { Map as LeafletMap } from 'leaflet';
import { ConfigOptions, MapEventCallback } from './types';


export interface MapInterface {
    getMap(): LeafletMap;
    flyTo(latlng: any, zoom?: number|null): void;
    getZoom(): number;
    addListener(event: string, callback: MapEventCallback): void;
    getOptions(): ConfigOptions;
}