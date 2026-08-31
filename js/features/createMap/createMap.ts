import L, { Map as LeafletMap } from 'leaflet';
import { CreateMapInterface, ConfigOptions } from '@helsingborg-stad/openstreetmap/js/features/createMap/createMapInterface';
import { MapInterface } from '@helsingborg-stad/openstreetmap/js/features/createMap/mapInterface';
import { Map } from '@helsingborg-stad/openstreetmap/js/features/createMap/map';

export class CreateMap implements CreateMapInterface {
    constructor(private options: ConfigOptions) {
    }

    public create(): MapInterface {  
        const map = L.map(
            this.options.id,
            {
                scrollWheelZoom: this.options.scrollWheelZoom ?? false,
                keyboard: this.options.keyboard ?? false,
                center: this.options.center ?? { lat: 59.32932, lng: 18.06858 },
                zoom: this.options.zoom ?? 16,
                zoomControl: this.options.zoomControl ?? true,
                attributionControl: false
            }
        );

        return new Map(map);
    }
}