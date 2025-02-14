interface ConfigInterface {
    // supported map appearances: 'dark', 'pale', 'default', 'color'
    getMapStyle(): string;
    getStartPosition(): LatLngObject;
    getInitialZoom(): number;
    getMaxZoom(): number;
    getMinZoom(): number;
    // supported positions 'topleft', 'topright', 'bottomleft' or 'bottomright';
    getAttributionPosition(): string;
}