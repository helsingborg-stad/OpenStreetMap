import L, { Marker as LeafletMarker } from 'leaflet';
import { CreateMarkerInterface, MarkerOptions, TooltipOptions } from './createMarkerInterface';
import { Marker } from './marker';

export class CreateMarker implements CreateMarkerInterface {
    constructor() {
    }

    public create(markerOptions: MarkerOptions, tooltipOptions: TooltipOptions|null = null): Marker {
        const icon = L.divIcon({
            className: markerOptions.className ?? '',
            html: markerOptions.html,
            iconSize: markerOptions.iconSize ?? [24, 24],
            iconAnchor: markerOptions.iconAnchor ?? [24, 24]
        });

        const marker = L.marker(markerOptions.position, {
            icon: icon,
            draggable: markerOptions.draggable ?? false,
        });

        if (tooltipOptions) {
            marker.bindPopup(tooltipOptions.content, {
                closeButton: tooltipOptions.closeButton ?? true,
                maxHeight: tooltipOptions.maxHeight ?? 100,
                maxWidth: tooltipOptions.maxWidth ?? 250,
                className: tooltipOptions.className ?? '',
                offset: tooltipOptions.offset ?? [0, 7]
            });
        }

        return new Marker(marker);
    }
}