import { MapInterface } from "../../mapInterface";
import L, { LayerGroup} from 'leaflet';
import { AddLayerInterface } from "./addLayerInterface";

export class AddLayer implements AddLayerInterface {
    constructor(private mapInstance: MapInterface) {}

    public addLayer(): LayerGroup {
        const layer = L.layerGroup().addTo(this.mapInstance.getMap());

        return layer;
    }
}