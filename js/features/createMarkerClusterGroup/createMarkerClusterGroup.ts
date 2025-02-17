import L, { Layer, Map as LeafletMap, MarkerClusterGroup, MarkerClusterGroupOptions } from 'leaflet';
import { CreateMarkerClusterGroupInterface } from './createMarkerClusterGroupInterface';
import 'leaflet.markercluster';


class CreateMarkerClusterGroup implements CreateMarkerClusterGroupInterface {
    constructor(private options: MarkerClusterGroupOptions = {}) {
    }

    public create(): MarkerClusterGroup {
        return L.markerClusterGroup(this.options);
    }
}

export default CreateMarkerClusterGroup;