import { MapInterface } from "../createMap/mapInterface";
import { AttributionPosition } from "../createTileLayer/createTileLayerInterface";

export interface SearchInterface {
    addTo(map: MapInterface): SearchInterface;
    setPosition(position: AttributionPosition): SearchInterface;
}