import L, { Map as LeafletMap} from 'leaflet';
import { MapInterface } from '../createMap/mapInterface';
import { AttributionPosition } from '../createTileLayer/createTileLayerInterface';
import { AttributionInterface } from './attributionInterface';

export class Attribution implements AttributionInterface {
    constructor(private leafletAttribution: L.Control.Attribution) {}

    public addAttributionText(attributionText: string): AttributionInterface {
        this.getAttribution().addAttribution(attributionText);

        return this;
    }

    public removeAttributionText(attributionText: string): AttributionInterface {
        this.getAttribution().removeAttribution(attributionText);

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