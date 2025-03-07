import { AddTo } from "../../addToInterface";

export interface TileLayerInterface extends AddTo {
    setUrl(url: string): TileLayerInterface;
    removeTileLayer(): TileLayerInterface;
}