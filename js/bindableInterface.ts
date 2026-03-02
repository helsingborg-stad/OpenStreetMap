import { ImageOverlay, Layer, LayerGroup, Map as LeafletMap, Marker } from 'leaflet';
import { PopupInterface } from './features/popup/popupInterface';

export interface Bindable {
    getBindable(): Layer;
}