import { Map as LeafletMap } from 'leaflet';
import { ConfigOptions } from './types';

export interface MapInterface {
    getMap(): LeafletMap;
    getOptions(): ConfigOptions;
}