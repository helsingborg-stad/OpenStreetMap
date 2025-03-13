import { Map as LeafletMap, LayerGroup as LeafletLayerGroup } from "leaflet";
import { LayerGroupInterface } from "./layerGroupInterface";
import { Addable } from "../../addableInterface";

export class LayerGroup implements LayerGroupInterface {
    constructor(private leafletLayer: LeafletLayerGroup) {

    }

    public removeLayerGroup(): LayerGroupInterface {
        this.getLayerGroup().remove();

        return this;
    }

    public removeLayerGroupFrom(addable: Addable): LayerGroupInterface {
        this.getLayerGroup().removeFrom(addable.getAddable() as LeafletMap);
        
        return this;
    }

    public addTo(addable: Addable): LayerGroupInterface {
        this.getLayerGroup().addTo(addable.getAddable());

        return this;
    }

    public getAddable(): LeafletLayerGroup {
        return this.getLayerGroup();
    }

    private getLayerGroup(): LeafletLayerGroup {
        return this.leafletLayer;
    }
}