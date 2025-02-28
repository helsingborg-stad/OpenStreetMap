import { LayerGroup as LeafletLayerGroup } from "leaflet";
import { LayerGroupInterface } from "./layerGroupInterface";
import { Addable } from "../../addableInterface";

export class LayerGroup implements LayerGroupInterface {
    constructor(private leafletLayer: LeafletLayerGroup) {

    }

    public getLayerGroup(): LeafletLayerGroup {
        return this.leafletLayer;
    }

    public removeLayerGroup(): void {
        this.getLayerGroup().remove();
    }

    public addTo(addable: Addable): void {
        this.getLayerGroup().addTo(addable.getAddable());
    }

    public getAddable(): LeafletLayerGroup {
        return this.getLayerGroup();
    }
}