import { Map as LeafletMap } from 'leaflet';
import { ConfigOptions } from './types';

export type MapEventCallback = (event: any) => void;

export type MapEvent = "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick";

export interface MapInterface {
    getMap(): LeafletMap;
    addListener(event: string, callback: MapEventCallback): void;
    getOptions(): ConfigOptions;
}