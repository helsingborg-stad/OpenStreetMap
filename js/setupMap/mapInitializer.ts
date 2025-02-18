import { Map as LeafletMap } from 'leaflet';
import { ConfigInterface } from './config/configInterface';
import { MapInitializerInterface } from './mapInitializerInterface';
import { SetupTilesInterface } from './setupTilesInterface';

class MapInitializer implements MapInitializerInterface {
    constructor(
        private config: ConfigInterface,
        private map: LeafletMap,
        private setupTiles: SetupTilesInterface,
    ) {

    }

    public initialize(): void {
        this.map.setView(
            [this.config.getStartPosition().lat, this.config.getStartPosition().lng],
            this.config.getInitialZoom()
        );

        this.setupTiles.set();
    }
}

export default MapInitializer;