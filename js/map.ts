import { Map as LeafletMap } from 'leaflet';
import CreateMap from "./setupMap/createMap";
import SetupTiles from "./setupMap/setupTiles";
import { ConfigOptions, PartialConfigOptions, MapEvent, MapEventCallback } from './types';
import { MapInterface } from './mapInterface';
import { Config } from './setupMap/config/config';
import { Addable } from './addableInterface';

class Map implements MapInterface, Addable {
    private map: LeafletMap;
    private listeners: { [key: string]: MapEventCallback[] } = {};

    constructor(private options: ConfigOptions) {
        this.map = new CreateMap(this.options).create();
        new SetupTiles(this, this.options).set();
        this.setupListeners();
    }

    public addListener(event: MapEvent, callback: MapEventCallback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    private setupListeners(): void {
       ( ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "contextmenu", "preclick"] as MapEvent[]).forEach(event => {
            this.getMap().on(event, (e) => {
                this.listeners[event]?.forEach((callback) => {
                    callback(e);
                });
            });
        });
    }

    public getMap(): LeafletMap {
        return this.map;
    }

    public getOptions(): ConfigOptions {
        return this.options;
    }

    public getAddable() {
        return this.getMap();
    }
}

export function createMap(partialConfig: PartialConfigOptions): MapInterface {
    const config = new Config(partialConfig).getConfig();
    return new Map(config);
}