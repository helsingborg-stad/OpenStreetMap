import L, { Rectangle as LeafletRectangle } from "leaflet";
import { RectangleInterface } from "./rectangleInterface";
import { Addable } from "../../addableInterface";
import { LatLngBoundsObject } from "../../types";

export class Rectangle implements RectangleInterface {
    constructor(private leafletRectangle: LeafletRectangle) {}

    public setLatLngBounds(latLngBoundsObject: LatLngBoundsObject): void {
        const southWest = L.latLng(latLngBoundsObject.southWest.lat, latLngBoundsObject.southWest.lng);
        const northEast = L.latLng(latLngBoundsObject.northEast.lat, latLngBoundsObject.northEast.lng);
        const bounds = L.latLngBounds(southWest, northEast);

        this.getRectangle().setBounds(bounds);
    }

    public addTo(addable: Addable): void {
        this.getRectangle().addTo(addable.getAddable());
    }

    public removeRectangle(): void {
        this.getRectangle().remove();
    }

    private getRectangle() {
        return this.leafletRectangle;
    }
}