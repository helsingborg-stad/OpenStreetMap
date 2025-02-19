import { MapInterface } from "../../mapInterface";
import L, { Marker as LeafletMarker } from 'leaflet';
import { LatLngObject } from "../../types";
import { MarkerInterface } from "./markerInterface";

class Marker implements MarkerInterface {
    constructor(private mapInstance: MapInterface, private marker: LeafletMarker) {
    }

    public setPosition(position: LatLngObject) {
        this.marker.setLatLng(position);
    }

    public getPosition(): LatLngObject {
        return this.marker.getLatLng();
    }

    public removeMarker() {
        this.mapInstance.getMap().removeLayer(this.marker);
    }
}

export default Marker;