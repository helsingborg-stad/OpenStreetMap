import { LatLngObject } from '../types';
import { MapInterface } from './mapInterface';

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