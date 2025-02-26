import { MapInterface } from "../../mapInterface";
import L from 'leaflet';
import { CreateLayerGroupInterface } from "./createLayerGroupInterface";
import { LayerGroup } from "./layerGroup";
import { LayerGroupInterface } from "./layerGroupInterface";
import { Addable } from "../../addableInterface";
import { AddTo } from "../../addToInterface";

export class CreateLayerGroup implements CreateLayerGroupInterface {
    constructor(private mapInstance: MapInterface) {}

    public create(): LayerGroupInterface&Addable&AddTo {
        const layer = L.layerGroup();

        return new LayerGroup(layer);
    }
}