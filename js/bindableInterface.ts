import { ImageOverlay, Layer, LayerGroup, Map as LeafletMap, Marker } from 'leaflet';
import { PopupInterface } from './features/createPopup/popupInterface';

export interface Bindable {
    getBindable(): Layer;
}