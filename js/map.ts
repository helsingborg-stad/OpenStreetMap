import { Map as LeafletMap } from 'leaflet';
import CreateMap from "./setupMap/createMap";
import SetupTiles from "./setupMap/setupTiles";
import { ConfigOptions, PartialConfigOptions } from './types';
import { MapInterface } from './mapInterface';
import { Config } from './setupMap/config/config';

class Map implements MapInterface {
    private map: LeafletMap;

    constructor(private options: ConfigOptions) {
        this.map = new CreateMap(this.options).create();
        new SetupTiles(this.map, this.options).set();
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