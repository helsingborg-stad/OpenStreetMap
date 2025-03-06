import L, { Map as LeafletMap } from 'leaflet';
import { CreateMapInterface, ConfigOptions } from './createMapInterface';
import { MapInterface } from './mapInterface';
import { Map } from './map';

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
                zoomControl: this.options.zoomControl ?? false
            }
        );

        return new Map(map);
    }
}