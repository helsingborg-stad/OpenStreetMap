import { ImageOverlay, Layer, LayerGroup, Map as LeafletMap, Marker } from 'leaflet';
import { PopupInterface } from '@helsingborg-stad/openstreetmap/js/features/createPopup/popupInterface';

export interface Bindable {
    getBindable(): Layer;
}