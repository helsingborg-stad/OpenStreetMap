import { Map as LeafletMap } from 'leaflet';
import CreateMap from "./setupMap/createMap";
import MapInitializer from "./setupMap/mapInitializer";
import SetupTiles from "./setupMap/setupTiles";
import { MapInterface } from './types/map';
import { ConfigInterface } from './types/config';

class Map implements MapInterface {
    private map: LeafletMap;

    constructor(private config: ConfigInterface) {
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

    public getConfig(): ConfigInterface {
        return this.config;
    }
}

export function createMap(config: ConfigInterface): MapInterface {
    return new Map(config);
}