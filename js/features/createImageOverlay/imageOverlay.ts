import { Addable } from "../../addableInterface";
import { LatLngBoundsObject, LatLngObject } from "../../types";
import { ImageOverlayInterface } from "./imageOverlayInterface";
import L, { LatLngBounds, ImageOverlay as LeafletImageOverlay } from "leaflet";

export class ImageOverlay implements ImageOverlayInterface {
    constructor(private leafletOverlay: LeafletImageOverlay) {}

    public addTo(addable: Addable): void {
        this.getImageOverlay().addTo(addable.getAddable());
    }

    public setPosition(latLngBounds: LatLngBoundsObject) {
        const southWest = L.latLng(latLngBounds.southWest.lat, latLngBounds.southWest.lng);
        const northEast = L.latLng(latLngBounds.northEast.lat, latLngBounds.northEast.lng);
        const bounds = L.latLngBounds(southWest, northEast);

        this.getImageOverlay().setBounds(bounds);
    }

    public getPosition(): LatLngBoundsObject {
        const bounds = this.getImageOverlay().getBounds();
        return {
            southWest: {
                lat: bounds.getSouthWest().lat,
                lng: bounds.getSouthWest().lng,
            },
            northEast: {
                lat: bounds.getNorthEast().lat,
                lng: bounds.getNorthEast().lng,
            }
        };
    }

    public getCenter(): LatLngObject {
        const bounds = this.getImageOverlay().getBounds();
        const center = bounds.getCenter();
        return {
            lat: center.lat,
            lng: center.lng,
        };
    }

    public removeImageOverlay(): void {
        this.getImageOverlay().remove();
    }

    private getImageOverlay() {
        return this.leafletOverlay;
    }
}