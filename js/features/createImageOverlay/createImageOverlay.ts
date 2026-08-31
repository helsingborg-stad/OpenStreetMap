import { LatLngBoundsObject } from "@helsingborg-stad/openstreetmap/js/types";
import { CreateImageOverlayInterface, ImageOverlayOptions } from "@helsingborg-stad/openstreetmap/js/features/createImageOverlay/createImageOverlayInterface";
import { ImageOverlay } from "@helsingborg-stad/openstreetmap/js/features/createImageOverlay/imageOverlay";
import { ImageOverlayInterface } from "@helsingborg-stad/openstreetmap/js/features/createImageOverlay/imageOverlayInterface";
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