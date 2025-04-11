import L, { Map as LeafletMap} from 'leaflet';
import { MapInterface } from '../../createMap/mapInterface';
import { AttributionPosition } from '../../createTileLayer/createTileLayerInterface';
import { SearchUiInterface } from '../searchInterface';

export class SearchUi implements SearchUiInterface {
    constructor(private searchControl: L.Control) {}
    public addTo(map: MapInterface): this {
        this.getSearchControl().addTo(map.getAddable() as LeafletMap);
        return this;
    }

    public setPosition(position: AttributionPosition): this {
        this.getSearchControl().setPosition(position);
        return this;
    }

    public removeSearch(): this {
        this.getSearchControl().remove();
        return this;
    }

    public getContainer(): HTMLElement|undefined {
        return this.getSearchControl().getContainer();
    }

    private getSearchControl(): L.Control {
        return this.searchControl;
    }
}