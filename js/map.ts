import L, { Layer, Map as LeafletMap, Marker, MarkerClusterGroup } from 'leaflet';

class Map implements MapInterface{
    constructor(
        private config: ConfigInterface,
        private map: LeafletMap,
        private markerClusterGroup: null|MarkerClusterGroup,
        private setupTiles: SetupTilesInterface,
        private mapElement: null|HTMLElement,
        private containerElement: null|HTMLElement
    ) {

    }

    public init(): void {
        this.map.setView([this.config.getStartPosition().lat, this.config.getStartPosition().lng], this.config.getInitialZoom());
        this.setupTiles.set();
    }
}

export default Map;