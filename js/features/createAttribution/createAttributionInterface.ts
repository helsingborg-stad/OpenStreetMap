import { AttributionInterface } from "./attributionInterface";

export type AttributionOptions = {
    position?: "topright" | "topleft" | "bottomright" | "bottomleft";
    prefix?: boolean;
}

export interface CreateAttribution {
    create(attributionOptions?: AttributionOptions): AttributionInterface;
}