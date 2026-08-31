import { Addable } from "@helsingborg-stad/openstreetmap/js/addableInterface";
import { AddTo } from "@helsingborg-stad/openstreetmap/js/addToInterface";
import { LayerGroupInterface } from "@helsingborg-stad/openstreetmap/js/features/createLayerGroup/layerGroupInterface";

export interface CreateLayerGroupInterface {
    create(): LayerGroupInterface;
}