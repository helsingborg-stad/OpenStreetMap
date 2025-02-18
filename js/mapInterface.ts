import { ConfigInterface } from './setupMap/config/configInterface';
import { Map as LeafletMap } from 'leaflet';

export interface MapInterface {
    getMap(): LeafletMap;
    getConfig(): ConfigInterface;
}