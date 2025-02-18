import L, { Map as LeafletMap } from 'leaflet';
import { CreateMapInterface } from './createMapInterface';
import { ConfigOptions } from '../types';

class CreateMap implements CreateMapInterface {
    constructor(private options: ConfigOptions) {
    }

    public create(): LeafletMap {  
        return L.map(
            this.options.id,
            {
                scrollWheelZoom: this.options.scrollWheelZoom,
                keyboard: this.options.keyboard,
                attributionControl: false,
                center: this.options.center,
                zoom: this.options.zoom,
            }
        );
    }
}

export default CreateMap;