import { Addable } from "../../addableInterface";
import { TileLayerInterface } from "./tileLayerInterface";

export class TileLayer implements TileLayerInterface {
    constructor(
        private tileLayer: L.TileLayer,
    ) {}

    public addTo(addable: Addable): TileLayerInterface {
        this.getTileLayer().addTo(addable.getAddable());

        return this;
    }

    public removeTileLayer(): TileLayerInterface {
        this.getTileLayer().remove();

        return this;
    }

    public setUrl(url: string): TileLayerInterface {
        this.getTileLayer().setUrl(url);

        return this;
    }

    private getTileLayer(): L.TileLayer {
        return this.tileLayer;
    }
}