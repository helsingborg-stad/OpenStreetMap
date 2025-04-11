import L, { Map as LeafletMap} from 'leaflet';
import { MapInterface } from '../../createMap/mapInterface';
import { AttributionPosition } from '../../createTileLayer/createTileLayerInterface';
import { SearchApiInterface, SearchLocationListItem, SearchUiInterface } from '../searchInterface';

export class SearchUi implements SearchUiInterface {
    constructor(private searchControl: L.Control, private searchApi: SearchApiInterface) {}

    private listenForInput(): void {
        this.getInput()?.addEventListener('change', (e: Event) => {
            this.searchApi.search((e.target as HTMLInputElement).value);
        });
    }

    public setSearchListItems(items: SearchLocationListItem[]): this {
        return this;
    }

    public addTo(map: MapInterface): this {
        this.getSearchControl().addTo(map.getAddable() as LeafletMap);
        this.listenForInput();
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

    public getInput(): HTMLInputElement|undefined {
        return this.getSearchControl().getContainer()?.querySelector('input') as HTMLInputElement;
    }

    private getSearchControl(): L.Control {
        return this.searchControl;
    }
}