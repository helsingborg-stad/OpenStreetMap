import { AddTo } from "../../addToInterface";
import { MapInterface } from "../createMap/mapInterface";
import { AttributionPosition } from "../createTileLayer/createTileLayerInterface";

export interface SearchInterface extends SearchUiInterface, SearchApiInterface {
    addTo(map: MapInterface): this;
    setPosition(position: AttributionPosition): this;
    // getContainer(): HTMLElement|undefined;
    removeSearch(): this;
}

export interface SearchUiInterface extends AddTo {
    setPosition(position: AttributionPosition): this;
    removeSearch(): this;
    getContainer(): HTMLElement|undefined;
    addTo(map: MapInterface): this;
}

export interface SearchApiInterface {
    setApiUrl(url: string): this;
    getApiUrl(): string;
    search(searchString: string): this;
}