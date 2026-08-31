import L from "leaflet";
import { LatLngBoundsObject } from "@helsingborg-stad/openstreetmap/js/types";
import { CreateRectangleInterface, RectangleOptions } from "@helsingborg-stad/openstreetmap/js/features/createRectangle/createRectangleInterface";
import { Rectangle } from "@helsingborg-stad/openstreetmap/js/features/createRectangle/rectangle";
import { RectangleInterface } from "@helsingborg-stad/openstreetmap/js/features/createRectangle/rectangleInterface";

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