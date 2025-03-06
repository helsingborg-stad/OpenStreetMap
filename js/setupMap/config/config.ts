import { ConfigOptions } from "../../types";
import { ConfigInterface } from "./configInterface";

export class Config implements ConfigInterface {
    private options: ConfigOptions;
    constructor(options: ConfigOptions) {
        this.options = this.getOptions(options);
    }

    private getOptions(options: ConfigOptions): ConfigOptions {
        return {
            ...this.getDefaultOptions(),
            ...options
        }
    }

    private getDefaultOptions(): ConfigOptions {
        return {
            id: '',
            keyboard: false,
            center: { lat: 59.32932, lng: 18.06858 },
            zoom: 16,
            zoomControl: false,
            scrollWheelZoom: false
        }
    }

    public getConfig(): ConfigOptions {
        return this.options;
    }
}