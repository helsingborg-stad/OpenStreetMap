import L from 'leaflet';
import { Attribution } from "./attribution";
import { AttributionInterface } from "./attributionInterface";
import { AttributionOptions } from './createAttributionInterface';

export class CreateAttribution {
    constructor() {}

    public create(attributionOptions: AttributionOptions): AttributionInterface {
        const attribution = L.control.attribution({
            position: attributionOptions.position ?? "bottomleft",
            prefix: attributionOptions.prefix ?? false
        });

        return new Attribution(attribution);
    }
}