class Config implements ConfigInterface {
    constructor(
        private id: string,
        private mapElement: HTMLElement,
        private containerElement: HTMLElement,
        private mapStyle: Nullable<string>,
        private startPosition: Nullable<LatLngObject>,
        private initialZoom: Nullable<number>,
        private maxZoom: Nullable<number>,
        private minZoom: Nullable<number>,
        private attributionPosition: Nullable<string>
    ) {
    }

    public getId(): string {
        return this.id;
    }

    public getMapElement(): HTMLElement {
        return this.mapElement;
    }

    public getContainerElement(): HTMLElement {
        return this.containerElement;
    }

    public getMapStyle(): string {
        return this.mapStyle ?? 'default';
    }

    public getStartPosition(): LatLngObject {
        return this.startPosition && this.startPosition.lat && this.startPosition.lng ? 
            this.startPosition : 
            { lat: 59.32932, lng: 18.06858 };
    }

    public getInitialZoom(): number {
        return this.initialZoom ?? 16;
    }

    public getMaxZoom(): number {
        return this.maxZoom ?? 19;
    }

    public getMinZoom(): number {
        return this.minZoom ?? 0;
    }

    public getAttributionPosition(): string {
        return this.attributionPosition ?? 'bottomleft';
    }
}

export default Config;