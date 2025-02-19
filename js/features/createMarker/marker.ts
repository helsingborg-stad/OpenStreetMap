import { MapInterface } from "../../mapInterface";
import L, { Marker as LeafletMarker } from 'leaflet';
import { LatLngObject } from "../../types";

class Marker {
    constructor(private mapInstance: MapInterface, private marker: LeafletMarker) {
    }

    
    public setPosition(position: LatLngObject) {
        this.marker.setLatLng(position);
    }

}

export default Marker;