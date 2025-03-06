import L from 'leaflet';
import { Addable } from "../../addableInterface";
import { TileLayerInterface } from "./tileLayerInterface";
import { MapInterface } from '../../mapInterface';

export class TileLayer implements TileLayerInterface {
    constructor(
        private mapInstance: MapInterface,
        private tileLayer: L.TileLayer,
        private attribution: L.Control.Attribution
    ) {}

    public addTo(addable: Addable): void {
        this.getTileLayer().addTo(addable.getAddable());
        this.getAttribution().addTo(this.mapInstance.getMap());
    }

    private getAttribution(): L.Control.Attribution {
        return this.attribution;
    }

    private getTileLayer(): L.TileLayer {
        return this.tileLayer;
    }
}