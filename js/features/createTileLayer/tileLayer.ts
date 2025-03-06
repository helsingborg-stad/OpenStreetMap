import L from 'leaflet';
import { Addable } from "../../addableInterface";
import { TileLayerInterface } from "./tileLayerInterface";
import { MapInterface } from '../createMap/mapInterface';

export class TileLayer implements TileLayerInterface {
    constructor(
        private mapInstance: MapInterface,
        private tileLayer: L.TileLayer,
        private attribution: L.Control.Attribution
    ) {}

    public addTo(addable: Addable): void {
        this.getTileLayer().addTo(addable.getAddable());
        this.getAttribution().addTo(this.mapInstance.getAddable() as L.Map);
    }

    public removeTileLayer(): void {
        this.getTileLayer().remove();
        this.getAttribution().remove();
    }

    public setUrl(url: string): void {
        this.getTileLayer().setUrl(url);
    }

    private getAttribution(): L.Control.Attribution {
        return this.attribution;
    }

    private getTileLayer(): L.TileLayer {
        return this.tileLayer;
    }
}