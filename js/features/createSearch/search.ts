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

    public showOrHideReset(): this {
        this.searchUi.showOrHideReset();
        return this;
    }

    public showOrHideSpinner(show: boolean): this {
        this.searchUi.showOrHideSpinner(show);
        return this;
    }

    public getTitleFromPlaceSchema(place: PlaceObject): string {
        return this.searchUi.getTitleFromPlaceSchema(place);
    }

    public getContainer(): HTMLElement|undefined {
        return this.searchUi.getContainer();
    }
}