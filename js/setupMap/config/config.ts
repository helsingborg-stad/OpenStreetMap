import { PartialConfigOptions, ConfigOptions } from "../../types";
import { ConfigInterface } from "./configInterface";

export class Config implements ConfigInterface {
    private options: ConfigOptions;
    constructor(options: PartialConfigOptions) {
        this.options = this.getOptions(options);
    }

    private getOptions(options: PartialConfigOptions): ConfigOptions {
        return {
            ...this.getDefaultOptions(),
            ...options
        }
    }

    private getDefaultOptions(): ConfigOptions {
        return {
            id: '',
            mapStyle: 'default',
            keyboard: false,
            attributionPosition: 'bottomleft',
            center: { lat: 59.32932, lng: 18.06858 },
            zoom: 16,
            maxZoom: 19,
            minZoom: 0,
            zoomControl: false,
            scrollWheelZoom: false
        }
    }

    public getConfig(): ConfigOptions {
        return this.options;
    }
}