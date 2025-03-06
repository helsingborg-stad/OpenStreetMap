import { LatLngBoundsObject } from "../../types";
import { CreateImageOverlayInterface, ImageOverlayOptions } from "./createImageOverlayInterface";
import { ImageOverlay } from "./imageOverlay";
import { ImageOverlayInterface } from "./imageOverlayInterface";
import L from 'leaflet';

export class CreateImageOverlay implements CreateImageOverlayInterface {
    public create(
        imageOverlayOptions: ImageOverlayOptions
    ): ImageOverlayInterface {
        const url = imageOverlayOptions.url;
        const latLngBounds: L.LatLngBoundsLiteral = [
            [imageOverlayOptions.bounds.southWest.lat, imageOverlayOptions.bounds.southWest.lng],
            [imageOverlayOptions.bounds.northEast.lat, imageOverlayOptions.bounds.northEast.lng]
        ];
        const imageOverlay = L.imageOverlay(
            url, 
            latLngBounds,
            imageOverlayOptions
        );

        return new ImageOverlay(imageOverlay);
    }
}