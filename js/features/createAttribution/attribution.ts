import L, { Map as LeafletMap} from 'leaflet';
import { MapInterface } from '@helsingborg-stad/openstreetmap/js/features/createMap/mapInterface';
import { AttributionPosition } from '@helsingborg-stad/openstreetmap/js/features/createTileLayer/createTileLayerInterface';
import { AttributionInterface } from '@helsingborg-stad/openstreetmap/js/features/createAttribution/attributionInterface';

export class Attribution implements AttributionInterface {
    constructor(private leafletAttribution: L.Control.Attribution) {}

    public addAttribution(attributionText: string): AttributionInterface {
        this.getAttribution().addAttribution(attributionText);

        return this;
    }

    public setPrefix(prefix: string): AttributionInterface {
        this.getAttribution().setPrefix(prefix);

        return this;
    }

    public removePrefix(): AttributionInterface {
        this.getAttribution().setPrefix(false);

        return this;
    }

    public addTo(mapInterface: MapInterface): AttributionInterface {
        this.getAttribution().addTo(mapInterface.getAddable() as LeafletMap);

        return this;
    }

    public setPosition(position: AttributionPosition): AttributionInterface {
        this.getAttribution().setPosition(position);

        return this;
    }

    public removeAttribution(): AttributionInterface {
        this.getAttribution().remove();

        return this;
    }

    private getAttribution(): L.Control.Attribution {
        return this.leafletAttribution;
    }
}