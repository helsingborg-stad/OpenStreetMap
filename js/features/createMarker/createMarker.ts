import L, { Marker as LeafletMarker } from 'leaflet';
import { MapInterface } from '../../mapInterface';
import { CreateMarkerInterface, MarkerOptions, TooltipOptions } from './createMarkerInterface';
import { LatLngObject } from '../../types';
import Marker from './marker';

export class CreateMarker implements CreateMarkerInterface {
    constructor(private mapInstance: MapInterface) {
    }

    public create(markerOptions: MarkerOptions, tooltipOptions: TooltipOptions|null = null): Marker {
        const icon = L.divIcon({
            className: markerOptions.className ?? '',
            html: markerOptions.icon, 
        });

        const marker = L.marker(markerOptions.position, {
            icon: icon,
            draggable: markerOptions.draggable ?? false,
        });

        if (tooltipOptions) {
            marker.bindPopup(tooltipOptions.content, {
                closeButton: tooltipOptions.closeButton ?? true,
                maxHeight: tooltipOptions.maxHeight ?? 250,
                maxWidth: tooltipOptions.maxWidth ?? 100,
            });
        }

        marker.addTo(this.mapInstance.getMap());

        return new Marker(this.mapInstance, marker);
    }
}