import Config from './config/config';
import Map from './map';

document.addEventListener('DOMContentLoaded', () => {
    const attribute = 'data-js-openstreetmap';
    const mapContainers = document.querySelectorAll(`[${attribute}]`) as NodeListOf<HTMLElement>;

    mapContainers.forEach((mapContainer) => {
        const id = mapContainer.getAttribute(attribute);
        const mapElement = mapContainer.querySelector(`#${id}`);

        if (!id || !mapElement) {
            console.error(`No id (${attribute}) or element found for ${mapContainer}`);
            return;
        }

        const {mapStyle, startPosition, initialZoom} = getSettingsFromMapContainer(mapContainer);

        const config = new Config(
            id,
            mapContainer,
            mapElement as HTMLElement,
            mapStyle,
            startPosition,
            initialZoom,
            null,
            null,
            null
        );

        Map.mapFactory(config);
    });
});

function getSettingsFromMapContainer(mapContainer: HTMLElement) {
    return {
        mapStyle: mapContainer.dataset.jsMapStyle ?? 'default',
        startPosition: mapContainer.dataset.jsStartPosition ? JSON.parse(mapContainer.dataset.jsStartPosition) : { lat: 59.32932, lng: 18.06858 },
        initialZoom: mapContainer.dataset.jsInitialZoom ? Number(mapContainer.dataset.jsInitialZoom) : 16,
    };
}
