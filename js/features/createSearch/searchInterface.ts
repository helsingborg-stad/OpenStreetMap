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
    addTo(map: MapInterface): this;
    getInput(): HTMLInputElement|undefined;
    setSearchListItems(items: any): this;
    addListItemListener(listItemClickListener: ListItemClickListener): this;
}

export interface SearchApiInterface {
    setApiUrl(url: string): this;
    setSearchParam(searchParam: string): this;
    search(question: string): Promise<PlaceObject[]>;
    addSearchResponseCallback(searchEventCallback: SearchCallback): this;
}