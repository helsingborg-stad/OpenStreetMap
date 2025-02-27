import { Addable } from "../../addableInterface";
import { AddTo } from "../../addToInterface";
import { LayerGroupInterface } from "./layerGroupInterface";

export interface CreateLayerGroupInterface {
    create(): LayerGroupInterface;
}