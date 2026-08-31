import { LayerGroup as LeafletLayerGroup } from "leaflet";
import { AddTo } from "@helsingborg-stad/openstreetmap/js/addToInterface";
import { Addable } from "@helsingborg-stad/openstreetmap/js/addableInterface";
import { Bindable } from "@helsingborg-stad/openstreetmap/js/bindableInterface";

export interface LayerGroupInterface extends AddTo, Addable, Bindable {
    removeLayerGroup(): LayerGroupInterface;
    removeLayerGroupFrom(addable: Addable): LayerGroupInterface;
}