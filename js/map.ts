import { Map as LeafletMap } from 'leaflet';
import CreateMap from "./setupMap/createMap";
import MapInitializer from "./setupMap/mapInitializer";
import SetupTiles from "./setupMap/setupTiles";

class Map implements MapInterface {
    private map: LeafletMap;

    constructor(private config: MapConfigInterface) {
        this.map = new CreateMap(this.config.getId(), {
            scrollWheelZoom: false,
            keyboard: false,
            attributionControl: false,
        }).create();

        new MapInitializer(
            this.config,
            this.map,
            new SetupTiles(this.map, this.config)
        ).initialize();
    }

    public getMap(): LeafletMap {
        return this.map;
    }

    public getConfig(): MapConfigInterface {
        return this.config;
    }
}

export function createMap(config: MapConfigInterface): MapInterface {
    return new Map(config);
}