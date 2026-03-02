import { LayerGroup as LeafletLayerGroup } from "leaflet";
import { AddTo } from "../../addToInterface";
import { Addable } from "../../addableInterface";
import { Bindable } from "../../bindableInterface";

export interface LayerGroupInterface extends AddTo, Addable, Bindable {
    removeLayerGroup(): LayerGroupInterface;
    removeLayerGroupFrom(addable: Addable): LayerGroupInterface;
}