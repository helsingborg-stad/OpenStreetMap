import { Map as LeafletMap } from 'leaflet';

class MapInitializer implements MapInitializerInterface {
    constructor(
        private config: MapConfigInterface,
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