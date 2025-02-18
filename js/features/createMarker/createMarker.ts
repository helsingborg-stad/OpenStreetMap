import { MapInterface } from '../../mapInterface';
import { CreateMarkerInterface, MarkerOptions } from './createMarkerInterface';

class CreateMarker implements CreateMarkerInterface {
    constructor(private mapInstance: MapInterface) {
    }

    public create(markerOptions: MarkerOptions): void {
        
    }
}