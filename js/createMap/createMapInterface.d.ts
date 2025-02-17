import { Map as LeafletMap } from 'leaflet';

export interface CreateMapInterface {
    create(): LeafletMap;
}