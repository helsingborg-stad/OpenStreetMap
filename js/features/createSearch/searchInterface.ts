import { AddTo } from "../../addToInterface";
import { SearchCallback } from "../../types";
import { MapInterface } from "../createMap/mapInterface";


export type SearchLocationListItem = {
    lat: number;
    lng: number;
    title: string;
}

export type SearchEventCallback = (event: any) => void;
export type ListItemClickListener = (event: SearchLocationListItem) => void;
export interface SearchInterface extends SearchUiInterface, SearchApiInterface {
}

export interface SearchUiInterface extends AddTo {
    removeSearch(): this;
    getContainer(): HTMLElement|undefined;
    addTo(map: MapInterface): this;
    setSearchListItems(items: SearchLocationListItem[]): this;
    addListItemListener(searchEventCallback: ListItemClickListener): this;
}

export interface SearchApiInterface {
    setApiUrl(url: string): this;
    setSearchParam(searchParam: string): this;
    search(question: string): Promise<any>;
    addSearchListener(searchEventCallback: SearchCallback): this;
}