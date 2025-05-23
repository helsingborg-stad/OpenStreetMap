import { MapInterface } from "../createMap/mapInterface";
import L from 'leaflet';
import { CreateLayerGroupInterface } from "./createLayerGroupInterface";
import { LayerGroup } from "./layerGroup";
import { LayerGroupInterface } from "./layerGroupInterface";

export class CreateLayerGroup implements CreateLayerGroupInterface {
    constructor() {}

    public create(): LayerGroupInterface {
        const layer = L.layerGroup();

        return new LayerGroup(layer);
    }
}