import { LayerGroup as LeafletLayerGroup } from "leaflet";
import { AddTo } from "../../addToInterface";
import { Addable } from "../../addableInterface";

export interface LayerGroupInterface extends AddTo,Addable {
    removeLayerGroup(): LayerGroupInterface;
    removeLayerGroupFrom(addable: Addable): LayerGroupInterface;
}