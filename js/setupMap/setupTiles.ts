import L, { ControlPosition, Map as LeafletMap } from 'leaflet';
import { Tiles } from './setupTilesInterface';
import { ConfigOptions } from '../types';

class SetupTiles {
    constructor(
        private map: LeafletMap,
        private config: ConfigOptions
    ) {
    }

    public set(): void {
        const tileLayer = this.getTileLayer();
        L.tileLayer(tileLayer.url, {
            maxZoom: this.config.maxZoom,
            minZoom: this.config.minZoom,
        }).addTo(this.map);

        L.control.attribution({
            position: this.config.attributionPosition as ControlPosition,
        }).addAttribution(
            tileLayer.attribution
        ).setPrefix(false).addTo(this.map);
    }

    private getTileLayer(): Tiles {
        switch (this.config.mapStyle) {
            case 'dark':
                return {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
                };
            case 'pale':
                return {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
                };
            case 'default':
                return {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
                };
            case 'color':
                return {
                    attribution:
                        'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
                    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
                };
            default:
                return {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
                };
        }
    }
}

export default SetupTiles;