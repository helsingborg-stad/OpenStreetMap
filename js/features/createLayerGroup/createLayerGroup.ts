import { MapInterface } from "@helsingborg-stad/openstreetmap/js/features/createMap/mapInterface";
import L from 'leaflet';
import { CreateLayerGroupInterface } from "@helsingborg-stad/openstreetmap/js/features/createLayerGroup/createLayerGroupInterface";
import { LayerGroup } from "@helsingborg-stad/openstreetmap/js/features/createLayerGroup/layerGroup";
import { LayerGroupInterface } from "@helsingborg-stad/openstreetmap/js/features/createLayerGroup/layerGroupInterface";

export class CreateLayerGroup implements CreateLayerGroupInterface {
    constructor() {}

    public create(): LayerGroupInterface {
        const layer = L.layerGroup();

        return new LayerGroup(layer);
    }
}