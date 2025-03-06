import { AddTo } from "../../addToInterface";

export interface TileLayerInterface extends AddTo {
    setUrl(url: string): void;
    removeTileLayer(): void;
}