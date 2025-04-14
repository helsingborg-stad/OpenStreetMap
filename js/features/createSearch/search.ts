import { SearchApiInterface, SearchInterface, SearchLocationListItem, SearchUiInterface } from './searchInterface';
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

    public setSearchListItems(items: SearchLocationListItem[]): this {
        this.searchUi.setSearchListItems(items);
        return this;
    }

    public search(question: string): this {
        this.apiInstance.search(question);
        return this;
    }

    public addSearchListener(callback: (data: any) => void): this {
        this.apiInstance.addSearchListener(callback);
        return this;
    }

    public setSearchParam(searchParam: string): this {
        this.apiInstance.setSearchParam(searchParam);
        return this;
    }

    public addTo(map: MapInterface): this {
        this.searchUi.addTo(map);
        return this;
    }

    public removeSearch(): this {
        this.searchUi.removeSearch();
        return this;
    }

    public getContainer(): HTMLElement|undefined {
        return this.searchUi.getContainer();
    }

    public getInput(): HTMLInputElement|undefined {
        return this.searchUi.getInput();
    }
}