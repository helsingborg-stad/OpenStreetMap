import L, { Map as LeafletMap } from 'leaflet';
import { MapInterface } from '../../mapInterface';
import { CreateMarkerInterface, MarkerOptions } from './createMarkerInterface';

class CreateMarker implements CreateMarkerInterface {
    constructor(private mapInstance: MapInterface) {
    }

    public create(markerOptions: MarkerOptions): void {
        let marker = L.divIcon({
            className: markerOptions.className ?? '',
            html: markerOptions.icon, 
        });

        if (markerOptions.tooltip) {
            marker.bindPopup(markerOptions.tooltip.content, {
                closeButton: markerOptions.tooltip.closeButton ?? true,
                maxHeight: markerOptions.tooltip.maxHeight ?? 250,
                maxWidth: markerOptions.tooltip.maxWidth ?? 100,
            });
        }
    }
}