import { LayerGroup as LeafletLayerGroup } from "leaflet";

export interface LayerGroupInterface {
    getLayerGroup(): LeafletLayerGroup;
}