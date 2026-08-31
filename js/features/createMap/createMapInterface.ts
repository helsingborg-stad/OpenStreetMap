import { LatLngObject } from '@helsingborg-stad/openstreetmap/js/types';
import { MapInterface } from '@helsingborg-stad/openstreetmap/js/features/createMap/mapInterface';

export type ConfigOptions = {
    id: string;
    keyboard?: boolean;
    center?: LatLngObject;
    zoom?: number;
    zoomControl?: boolean;
    scrollWheelZoom?: boolean;
}

export interface CreateMapInterface {
    create(): MapInterface;
}