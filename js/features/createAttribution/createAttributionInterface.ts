import { ControlPosition } from "@helsingborg-stad/openstreetmap/js/types";
import { AttributionInterface } from "@helsingborg-stad/openstreetmap/js/features/createAttribution/attributionInterface";

export type AttributionOptions = {
    position?: ControlPosition;
    prefix?: boolean;
}

export interface CreateAttribution {
    create(attributionOptions?: AttributionOptions): AttributionInterface;
}