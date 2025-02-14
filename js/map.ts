import L, { Layer, Map as LeafletMap, Marker, MapOptions, MarkerCluster } from 'leaflet';
import CreateMap from "./createMap/createMap";
import MapInitializer from "./mapInitializer/mapInitializer";
import SetupTiles from "./setupTiles/setupTiles";

class Map {
    private map!: LeafletMap; 
    private constructor(private config: ConfigInterface) {}

    private initialize(): void {
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

    public static mapFactory(config: ConfigInterface) {
        return new Map(config).initialize();
    }
}

export default Map;