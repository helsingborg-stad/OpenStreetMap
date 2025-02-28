import { Addable } from "../../addableInterface";
import { LatLngBoundsObject } from "../../types";
import { ImageOverlayInterface } from "./imageOverlayInterface";
import L, { LatLngBounds, ImageOverlay as LeafletImageOverlay } from "leaflet";

export class ImageOverlay implements ImageOverlayInterface {
    constructor(private leafletOverlay: LeafletImageOverlay) {}

    public addTo(addable: Addable): void {
        this.getImageOverlay().addTo(addable.getAddable());
    }

    public setLatLngBounds(latLngBounds: LatLngBoundsObject) {
        const southWest = L.latLng(latLngBounds.southWest.lat, latLngBounds.southWest.lng);
        const northEast = L.latLng(latLngBounds.northEast.lat, latLngBounds.northEast.lng);
        const bounds = L.latLngBounds(southWest, northEast);

        this.getImageOverlay().setBounds(bounds);
    }

    public removeImageOverlay(): void {
        this.getImageOverlay().remove();
    }

    private getImageOverlay() {
        return this.leafletOverlay;
    }
}