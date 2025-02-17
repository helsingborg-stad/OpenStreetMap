import L, { Layer, Map as LeafletMap, Marker, MapOptions, MarkerCluster } from 'leaflet';
import CreateMap from "./createMap/createMap";
import MapInitializer from "./mapInitializer/mapInitializer";
import SetupTiles from "./setupTiles/setupTiles";

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