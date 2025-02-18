import { Map as LeafletMap } from 'leaflet';
import CreateMap from "./setupMap/createMap";
import MapInitializer from "./setupMap/mapInitializer";
import SetupTiles from "./setupMap/setupTiles";
import { ConfigInterface } from './setupMap/config/configInterface';
import { ConfigOptions } from './types';
import { MapInterface } from './mapInterface';

class Map implements MapInterface {
    private map: LeafletMap;
    private options: ConfigOptions;

    constructor(config: ConfigInterface) {
        this.options = config.getConfig();

        this.map = new CreateMap(this.options).create();

        new MapInitializer(
            this.options,
            this.map,
            new SetupTiles(this.map, this.options)
        ).initialize();
    }

    public getMap(): LeafletMap {
        return this.map;
    }

    public getOptions(): ConfigOptions {
        return this.options;
    }
}

export function createMap(config: ConfigInterface): MapInterface {
    return new Map(config);
}