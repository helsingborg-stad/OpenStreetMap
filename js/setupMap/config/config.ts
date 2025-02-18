import { LatLngObject } from "../../types";
import { ConfigInterface, Options, AttributionPosition, MapStyle } from "./configInterface";

export class Config implements ConfigInterface {
    constructor(private options: Options) {
    }

    public getId(): string {
        return this.options.id;
    }

    public getMapStyle(): MapStyle {
        return this.options.mapStyle ?? 'default';
    }

    public getStartPosition(): LatLngObject {
        return this.options.startPosition && this.options.startPosition.lat && this.options.startPosition.lng ? 
            this.options.startPosition : 
            { lat: 59.32932, lng: 18.06858 };
    }

    public getInitialZoom(): number {
        return this.options.initialZoom ?? 16;
    }

    public getMaxZoom(): number {
        return this.options.maxZoom ?? 19;
    }

    public getMinZoom(): number {
        return this.options.minZoom ?? 0;
    }

    public getAttributionPosition(): AttributionPosition {
        return this.options.attributionPosition ?? 'bottomleft';
    }
}