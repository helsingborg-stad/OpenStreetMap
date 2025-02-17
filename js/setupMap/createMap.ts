import L, { Map as LeafletMap, MapOptions } from 'leaflet';
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