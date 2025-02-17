import { ConfigInterface } from './config';
import { Map as LeafletMap } from 'leaflet';

export interface MapInterface {
    getMap(): LeafletMap;
    getConfig(): ConfigInterface;
}