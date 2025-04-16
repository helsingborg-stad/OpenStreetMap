import { ListItemClickListener, SearchApiInterface, SearchEventCallback, SearchInterface, SearchLocationListItem, SearchUiInterface } from './searchInterface';
import { MapInterface } from '../createMap/mapInterface';

export class Search implements SearchInterface {
    public apiUrl: string = '';

    constructor(
        private apiInstance: SearchApiInterface,
        private searchUi: SearchUiInterface
    ) {}

    public addSearchListener(searchEventCallback: SearchEventCallback): this {
        this.apiInstance.addSearchListener(searchEventCallback);
        return this;
    }

    public addListItemListener(searchEventCallback: ListItemClickListener): this {
        this.searchUi.addListItemListener(searchEventCallback);
        return this;
    }

    public setApiUrl(url: string): this {
        this.apiInstance.setApiUrl(url);
        return this;
    }

    public setSearchListItems(items: SearchLocationListItem[]): this {
        this.searchUi.setSearchListItems(items);
        return this;
    }

    public search(question: string): Promise<any> {
        return this.apiInstance.search(question);
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
}