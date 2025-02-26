import { LayerGroup as LeafletLayerGroup } from "leaflet";
import { LayerGroupInterface } from "./layerGroupInterface";
import { Addable } from "../../addableInterface";
import { AddTo } from "../../addToInterface";

export class LayerGroup implements LayerGroupInterface, Addable, AddTo {
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