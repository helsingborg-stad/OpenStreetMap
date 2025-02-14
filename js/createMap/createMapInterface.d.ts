import L, { Layer, Map as LeafletMap, Marker, MapOptions } from 'leaflet';

export interface CreateMapInterface {
    create(): LeafletMap;
}