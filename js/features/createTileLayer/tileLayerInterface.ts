import { AddTo } from "@helsingborg-stad/openstreetmap/js/addToInterface";

export interface TileLayerInterface extends AddTo {
    setUrl(url: string): TileLayerInterface;
    removeTileLayer(): TileLayerInterface;
}