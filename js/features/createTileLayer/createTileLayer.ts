import L, { ControlPosition } from 'leaflet';
import { CreateTileLayerInterface, TileLayerOptions } from "./createTileLayerInterface";
import { TileLayer } from "./tileLayer";
import { TileLayerInterface } from "./tileLayerInterface";
import { MapInterface } from '../createMap/mapInterface';

export class CreateTileLayer implements CreateTileLayerInterface {
    constructor() {}

    public create(tileLayerOptions: TileLayerOptions): TileLayerInterface {

        const tileLayer = L.tileLayer(tileLayerOptions.url, {
            maxZoom: tileLayerOptions.maxZoom ?? 18,
            minZoom: tileLayerOptions.minZoom ?? 0,
            tileSize: tileLayerOptions.tileSize ?? 256,
            opacity: tileLayerOptions.opacity ?? 1.0,
            className: tileLayerOptions.className ?? ''
        });

        return new TileLayer(tileLayer);
    }
}