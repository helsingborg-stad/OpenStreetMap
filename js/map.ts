import { Map as LeafletMap } from 'leaflet';
import CreateMap from "./setupMap/createMap";
import MapInitializer from "./setupMap/mapInitializer";
import SetupTiles from "./setupMap/setupTiles";
import { ConfigInterface } from './setupMap/config/configInterface';
import { ConfigOptions, PartialConfigOptions } from './types';
import { MapInterface } from './mapInterface';
import { Config } from './setupMap/config/config';

class Map implements MapInterface {
    private map: LeafletMap;

    constructor(private options: ConfigOptions) {
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

export function createMap(partialConfig: PartialConfigOptions): MapInterface {
    const config = new Config(partialConfig).getConfig();
    return new Map(config);
}