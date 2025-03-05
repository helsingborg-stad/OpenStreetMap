import { LatLngBoundsObject } from "../../types";
import { CreateImageOverlayInterface, ImageOverlayOptions } from "./createImageOverlayInterface";
import { ImageOverlay } from "./imageOverlay";
import { ImageOverlayInterface } from "./imageOverlayInterface";
import L from 'leaflet';

export class CreateImageOverlay implements CreateImageOverlayInterface {
    // TODO: Add URL and Positioning to imageOverlayOptions
    public create(
        url: string,
        latLngBounds: LatLngBoundsObject,
        imageOverlayOptions: ImageOverlayOptions = {}
    ): ImageOverlayInterface {
        const imageOverlay = L.imageOverlay(
            url, 
            [
                [latLngBounds.southWest.lat, latLngBounds.southWest.lng], 
                [latLngBounds.northEast.lat, latLngBounds.northEast.lng]
            ],
            imageOverlayOptions
        );

        return new ImageOverlay(imageOverlay);
    }
}