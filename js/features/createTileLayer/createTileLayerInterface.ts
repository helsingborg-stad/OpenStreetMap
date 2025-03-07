import { TileLayerInterface } from "./tileLayerInterface";

export type AttributionPosition = "topleft"|"topright"|"bottomleft"|"bottomright";

export type TileLayerOptions = {
    url: string,
    maxZoom?: number,
    minZoom?: number,
    tileSize?: number,
    opacity?: number,
    className?: string
}

export interface CreateTileLayerInterface {
    create(tileLayerOptions: TileLayerOptions): TileLayerInterface; 
}