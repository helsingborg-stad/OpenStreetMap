import { Map as LeafletMap } from 'leaflet';
import { ConfigInterface } from '../types/config';
import { MapInitializerInterface } from '../types/mapInitializer';
import { SetupTilesInterface } from '../types/setupTiles';

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