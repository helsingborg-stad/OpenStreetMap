import { SearchApiInterface, SearchInterface, SearchUiInterface } from './searchInterface';
import { MapInterface } from '../createMap/mapInterface';
import { AttributionPosition } from '../createTileLayer/createTileLayerInterface';

export class Search implements SearchInterface {
    public apiUrl: string = '';

    constructor(
        private apiInstance: SearchApiInterface,
        private searchUi: SearchUiInterface
    ) {}

    public setApiUrl(url: string): this {
        this.apiInstance.setApiUrl(url);
        return this;
    }

    public getApiUrl(): string {
        return this.apiUrl;
    }

    public search(searchString: string): this {
        return this;
    }

    public addTo(map: MapInterface): this {
        this.searchUi.addTo(map);
        return this;
    }

    public setPosition(position: AttributionPosition): this {
        this.searchUi.setPosition(position);
        return this;
    }

    public removeSearch(): this {
        this.searchUi.removeSearch();
        return this;
    }

    public getContainer(): HTMLElement|undefined {
        return this.searchUi.getContainer();
    }
}