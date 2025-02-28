import { LatLngBoundsObject } from "../../types";
import { CreateImageOverlayInterface } from "./createImageOverlayInterface";
import { ImageOverlay } from "./imageOverlay";
import { ImageOverlayInterface } from "./imageOverlayInterface";
import L from 'leaflet';

export class CreateImageOverlay implements CreateImageOverlayInterface {
    public create(url: string, latLngBounds: LatLngBoundsObject): ImageOverlayInterface {
        const imageOverlay = L.imageOverlay(
            url, 
            [
                [latLngBounds.southWest.lat, latLngBounds.southWest.lng], 
                [latLngBounds.northEast.lat, latLngBounds.northEast.lng]
            ]
        );

        return new ImageOverlay(imageOverlay);
    }
}