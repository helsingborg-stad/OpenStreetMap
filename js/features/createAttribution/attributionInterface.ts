import { AddTo } from "../../addToInterface";
import { AttributionPosition } from "../createTileLayer/createTileLayerInterface";

export interface AttributionInterface extends AddTo {
    addAttribution(attribution: string): AttributionInterface;
    setPosition(position: AttributionPosition): AttributionInterface;
    removeAttribution(): AttributionInterface;
    setPrefix(prefix: string): AttributionInterface;
    removePrefix(): AttributionInterface;
}