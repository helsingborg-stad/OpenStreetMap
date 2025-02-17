import { LatLngObject, Nullable } from './types';

export type MapStyle = "dark"|"pale"|"default"|"color";
export type AttributionPosition = "topleft"|"topright"|"bottomleft"|"bottomright";

export type Options = {
    id: string;
    mapStyle?: Nullable<MapStyle>;
    startPosition?: Nullable<LatLngObject>;
    initialZoom?: Nullable<number>;
    maxZoom?: Nullable<number>
    minZoom?: Nullable<number>
    attributionPosition?: Nullable<AttributionPosition>
}

export interface ConfigInterface {
    getId(): string;
    getMapStyle(): MapStyle;
    getStartPosition(): LatLngObject;
    getInitialZoom(): number;
    getMaxZoom(): number;
    getMinZoom(): number;
    getAttributionPosition(): AttributionPosition;
}