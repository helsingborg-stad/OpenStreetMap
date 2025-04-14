import { AddTo } from "../../addToInterface";
import { SearchCallback } from "../../types";
import { MapInterface } from "../createMap/mapInterface";

export type SearchEventCallback = (event: any) => void;

export type SearchLocationListItem = {
    lat: number;
    lng: number;
    title: string;
}

export interface SearchInterface extends SearchUiInterface, SearchApiInterface {
}

export interface SearchUiInterface extends AddTo {
    removeSearch(): this;
    getContainer(): HTMLElement|undefined;
    getInput(): HTMLInputElement|undefined;
    addTo(map: MapInterface): this;
    setSearchListItems(items: SearchLocationListItem[]): this;
}

export interface SearchApiInterface {
    setApiUrl(url: string): this;
    setSearchParam(searchParam: string): this;
    search(question: string): this;
    addSearchListener(searchEventCallback: SearchCallback): this;
}