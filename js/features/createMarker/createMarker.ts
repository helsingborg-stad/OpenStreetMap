import L, { Marker } from 'leaflet';
import { MapInterface } from '../../mapInterface';
import { CreateMarkerInterface, MarkerOptions, TooltipOptions } from './createMarkerInterface';

export class CreateMarker implements CreateMarkerInterface {
    constructor(private mapInstance: MapInterface) {
    }

    public create(markerOptions: MarkerOptions, tooltipOptions: TooltipOptions|null = null): Marker {
        const icon = L.divIcon({
            className: markerOptions.className ?? '',
            html: markerOptions.icon, 
        });

        const marker = L.marker(markerOptions.position, {
            icon: icon
        });

        if (tooltipOptions) {
            marker.bindPopup(tooltipOptions.content, {
                closeButton: tooltipOptions.closeButton ?? true,
                maxHeight: tooltipOptions.maxHeight ?? 250,
                maxWidth: tooltipOptions.maxWidth ?? 100,
            });
        }

        return marker;
    }
}