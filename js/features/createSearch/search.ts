import { SearchControl } from 'leaflet-geosearch';
import { SearchInterface } from './searchInterface';
import { MapInterface } from '../createMap/mapInterface';
import L, { Map as LeafletMap} from 'leaflet';
import { AttributionPosition } from '../createTileLayer/createTileLayerInterface';

export class Search implements SearchInterface {
    constructor(
        private searchControl: L.Control
    ) {}

    public addTo(map: MapInterface): SearchInterface {
        this.getSearchControl().addTo(map.getAddable() as LeafletMap);

        return this;
    }

    public setPosition(position: AttributionPosition): SearchInterface {
        this.getSearchControl().setPosition(position);

        return this;
    }

    private getSearchControl(): L.Control {
        return this.searchControl;
    }
}