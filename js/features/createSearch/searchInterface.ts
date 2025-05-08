import { AddTo } from "../../addToInterface";
import { MapInterface } from "../createMap/mapInterface";
import { Place } from 'schema-dts';

export type PlaceObject = Exclude<Place, string | URL>;

export type SearchCallback = (data: any) => PlaceObject[];

export type ListItemClickListener = (event: PlaceObject) => void;

export interface SearchInterface extends SearchUiInterface, SearchApiInterface {
}

export interface SearchUiInterface extends AddTo {
    removeSearch(): this;
    getContainer(): HTMLElement|undefined;
    getTitleFromPlaceSchema(place: PlaceObject): string;
    addTo(map: MapInterface): this;
    getInput(): HTMLInputElement|undefined;
    setSearchListItems(items: PlaceObject[]|null): this;
    addListItemListener(listItemClickListener: ListItemClickListener): this;
    getResetButton(): HTMLElement|undefined;
    showOrHideSpinner(show: boolean): this;
    showOrHideReset(): this;
    setValue(value: string): this;
}

export interface SearchApiInterface {
    setApiUrl(url: string): this;
    setSearchParam(searchParam: string): this;
    search(question: string): Promise<PlaceObject[]>;
    addSearchResponseCallback(searchEventCallback: SearchCallback): this;
}