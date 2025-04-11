import { AddTo } from "../../addToInterface";
import { SearchCallback } from "../../types";
import { MapInterface } from "../createMap/mapInterface";
import { AttributionPosition } from "../createTileLayer/createTileLayerInterface";

export type SearchLocationListItem = {
    lat: number;
    lng: number;
    title: string;
}

export interface SearchInterface extends SearchUiInterface, SearchApiInterface {
    addTo(map: MapInterface): this;
    setPosition(position: AttributionPosition): this;
    removeSearch(): this;
}

export interface SearchUiInterface extends AddTo {
    setPosition(position: AttributionPosition): this;
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
    addSearchListener(callback: SearchCallback): this;
}