import { Map as LeafletMap } from 'leaflet';
import { MapInitializerInterface } from './mapInitializerInterface';
import { SetupTilesInterface } from './setupTilesInterface';
import { ConfigOptions } from '../types';


class MapInitializer implements MapInitializerInterface {
    constructor(
        private config: ConfigOptions,
        private map: LeafletMap,
        private setupTiles: SetupTilesInterface,
    ) {

    }

    public initialize(): void {
        this.map.setView(
            [this.config.center.lat, this.config.center.lng],
            this.config.zoom
        );

        this.setupTiles.set();
    }
}

export default MapInitializer;