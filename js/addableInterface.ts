import { LayerGroup, Map as LeafletMap } from 'leaflet';

export interface Addable {
    getAddable(): LeafletMap|LayerGroup;
}