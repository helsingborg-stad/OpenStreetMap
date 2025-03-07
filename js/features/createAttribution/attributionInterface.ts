import { AddTo } from "../../addToInterface";
import { AttributionPosition } from "../createTileLayer/createTileLayerInterface";

export interface AttributionInterface extends AddTo {
    addAttributionText(attribution: string): AttributionInterface;
    removeAttributionText(attribution: string): AttributionInterface;
    setPosition(position: AttributionPosition): AttributionInterface;
    removeAttribution(): AttributionInterface;
    setPrefix(prefix: string): AttributionInterface;
    removePrefix(): AttributionInterface;
}