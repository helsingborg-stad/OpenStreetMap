import { ListItemClickListener, PlaceObject, SearchApiInterface, SearchCallback, SearchInterface, SearchUiInterface } from './searchInterface';
import { MapInterface } from '../createMap/mapInterface';

export class Search implements SearchInterface {
    public apiUrl: string = '';

    constructor(
        private apiInstance: SearchApiInterface,
        private searchUi: SearchUiInterface
    ) {}

    public addSearchResponseCallback(searchEventCallback: SearchCallback): this {
        this.apiInstance.addSearchResponseCallback(searchEventCallback);
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

    public setSearchListItems(items: PlaceObject[]|null): this {
        this.searchUi.setSearchListItems(items);
        return this;
    }

    public search(question: string): Promise<PlaceObject[]> {
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

    public getInput(): HTMLInputElement|undefined {
        return this.searchUi.getInput();
    }

    public getResetButton(): HTMLElement|undefined {
        return this.searchUi.getResetButton();
    }

    public showSpinner(): this {
        this.searchUi.showSpinner();
        return this;
    }

    public hideSpinner(): this {
        this.searchUi.hideSpinner();
        return this;
    }

    public showResetButton(): this {
        this.searchUi.showResetButton();
        return this;
    }

    public hideResetButton(): this {
        this.searchUi.hideResetButton();
        return this;
    }

    public isSearching(): boolean {
        return this.apiInstance.isSearching();
    }

    public setValue(value: string): this {
        this.searchUi.setValue(value);
        return this;
    }

    public getTitleFromPlaceSchema(place: PlaceObject): string {
        return this.searchUi.getTitleFromPlaceSchema(place);
    }

    public getContainer(): HTMLElement|undefined {
        return this.searchUi.getContainer();
    }
}