import L, { Map as LeafletMap} from 'leaflet';
import { MapInterface } from '../createMap/mapInterface';
import { AttributionPosition } from '../createTileLayer/createTileLayerInterface';

export class Attribution {
    constructor(private leafletAttribution: L.Control.Attribution) {}

    public addAttributionText(attributionText: string): Attribution {
        this.getAttribution().addAttribution(attributionText);

        return this;
    }

    public removeAttributionText(attributionText: string): Attribution {
        this.getAttribution().removeAttribution(attributionText);

        return this;
    }

    public addTo(mapInterface: MapInterface): Attribution {
        this.getAttribution().addTo(mapInterface.getAddable() as LeafletMap);

        return this;
    }

    public setPosition(position: AttributionPosition): Attribution {
        this.getAttribution().setPosition(position);

        return this;
    }

    public removeAttribution(): Attribution {
        this.getAttribution().remove();

        return this;
    }

    private getAttribution(): L.Control.Attribution {
        return this.leafletAttribution;
    }
}