import { ControlPosition } from "../../types";
import { AttributionInterface } from "./attributionInterface";

export type AttributionOptions = {
    position?: ControlPosition;
    prefix?: boolean;
}

export interface CreateAttribution {
    create(attributionOptions?: AttributionOptions): AttributionInterface;
}