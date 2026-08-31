import L from 'leaflet';
import { CreateTileLayerInterface, TileLayerOptions } from "@helsingborg-stad/openstreetmap/js/features/createTileLayer/createTileLayerInterface";
import { TileLayer } from "@helsingborg-stad/openstreetmap/js/features/createTileLayer/tileLayer";
import { TileLayerInterface } from "@helsingborg-stad/openstreetmap/js/features/createTileLayer/tileLayerInterface";

export class CreateTileLayer implements CreateTileLayerInterface {
    constructor() {}

    public create(tileLayerOptions: TileLayerOptions = {}): TileLayerInterface {
        const tileLayer = L.tileLayer(tileLayerOptions.url ?? "", {
            maxZoom: tileLayerOptions.maxZoom ?? 18,
            minZoom: tileLayerOptions.minZoom ?? 0,
            tileSize: tileLayerOptions.tileSize ?? 256,
            opacity: tileLayerOptions.opacity ?? 1.0,
            className: tileLayerOptions.className ?? ''
        });

        return new TileLayer(tileLayer);
    }
}