import L from 'leaflet';
import { Attribution } from "@helsingborg-stad/openstreetmap/js/features/createAttribution/attribution";
import { AttributionInterface } from "@helsingborg-stad/openstreetmap/js/features/createAttribution/attributionInterface";
import { AttributionOptions } from '@helsingborg-stad/openstreetmap/js/features/createAttribution/createAttributionInterface';

export class CreateAttribution {
    constructor() {}

    public create(attributionOptions: AttributionOptions = {}): AttributionInterface {
        const attribution = L.control.attribution({
            position: attributionOptions.position ?? "bottomleft",
            prefix: attributionOptions.prefix ?? false
        });

        return new Attribution(attribution);
    }
}