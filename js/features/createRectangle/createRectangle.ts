import L from "leaflet";
import { LatLngBoundsObject } from "../../types";
import { CreateRectangleInterface, RectangleOptions } from "./createRectangleInterface";
import { Rectangle } from "./rectangle";
import { RectangleInterface } from "./rectangleInterface";

export class CreateRectangle implements CreateRectangleInterface {
    public create(
        latLngBounds: LatLngBoundsObject,
        rectangleOptions: RectangleOptions = {}
    ): RectangleInterface {
        const rectangle = L.rectangle([
            [latLngBounds.southWest.lat, latLngBounds.southWest.lng],
            [latLngBounds.northEast.lat, latLngBounds.northEast.lng]
        ],
        rectangleOptions);

        return new Rectangle(rectangle);
    }
}