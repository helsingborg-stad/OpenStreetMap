import L, { Layer, Map as LeafletMap, Marker, MapOptions, MarkerCluster } from 'leaflet';
import { CreateMapInterface } from './createMapInterface';

class CreateMap implements CreateMapInterface {
    constructor(private id: string, private options: MapOptions = {}) {
    }

    public create(): LeafletMap {  
        return L.map(
            this.id,
            this.options
        );
    }
}

export default CreateMap;