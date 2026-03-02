import { ImageOverlay, Layer, LayerGroup, Map as LeafletMap, Marker } from 'leaflet';

export interface Bindable {
    getBindable(): Layer;
}