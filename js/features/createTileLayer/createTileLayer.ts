import L, { ControlPosition } from 'leaflet';
import { CreateTileLayerInterface, TileLayerOptions, Tiles } from "./createTileLayerInterface";
import { TileLayer } from "./tileLayer";
import { TileLayerInterface } from "./tileLayerInterface";
import { MapInterface } from '../../createMap/mapInterface';

export class CreateTileLayer implements CreateTileLayerInterface {
    constructor(private mapInstance: MapInterface) {}

    public create(tileLayerOptions: TileLayerOptions): TileLayerInterface {
        let tiles;

        try {
            new URL(tileLayerOptions.url);
            
            tiles = {
                url: tileLayerOptions.url,
                attribution: tileLayerOptions.attribution ?? ""
            };
        } catch {
            tiles = this.getTileLayer(tileLayerOptions.url);
        }

        const tileLayer = L.tileLayer(tiles.url, {
            maxZoom: tileLayerOptions.maxZoom ?? 18,
            minZoom: tileLayerOptions.minZoom ?? 0,
            tileSize: tileLayerOptions.tileSize ?? 256,
            opacity: tileLayerOptions.opacity ?? 1.0,
            className: tileLayerOptions.className ?? ''
        });

        const attribution = L.control.attribution({
            position: tiles.attribution as ControlPosition,
        }).addAttribution(
            tiles.attribution ?? ""
        ).setPrefix(false);

        return new TileLayer(this.mapInstance, tileLayer, attribution);
    }

    private getTileLayer(name: string): Tiles {
        switch (name) {
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