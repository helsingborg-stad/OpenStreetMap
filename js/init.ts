import CreateMap from './createMap/createMap';
import CreateMarkerClusterGroup from './createMarkerClusterGroup/createMarkerClusterGroup';
import Config from './config/config';
import Map from './map';
import SetupTiles from './setupTiles/setupTiles';
import L, { Layer, Map as LeafletMap, Marker, MarkerClusterGroup } from 'leaflet';



document.addEventListener('DOMContentLoaded', () => {
    const attribute = 'data-js-openstreetmap';
    const mapContainers = document.querySelectorAll(`[${attribute}]`) as NodeListOf<HTMLElement>;
    mapContainers.forEach((container) => {
        const id = container.getAttribute(attribute);
        const mapElement = container.querySelector(`#${id}`);

        if (!id || !mapElement) {
            console.error(`No id (${attribute}) or element found for ${container}`);
            return;
        }

        const [mapStyle, startPosition, initialZoom] = getSettingsFromContainer(container);

        const config = new Config(
            mapStyle,
            startPosition,
            initialZoom,
            null,
            null,
            null
        )

        const markerClusterGroup = new CreateMarkerClusterGroup().create();
        const map = new CreateMap(id, {}).create();

        const InitMapInstance = new Map(
            config,
            map,
            markerClusterGroup,
            new SetupTiles(map, config),
            (mapElement as HTMLElement),
            (container as HTMLElement)
        );

        InitMapInstance.init();
    });
});

function getSettingsFromContainer(container: HTMLElement) {
    const mapStyle = container.dataset.jsMapStyle ?? 'default';
    const startPosition = container.dataset.jsStartPosition ? 
        JSON.parse(container.dataset.jsStartPosition) : 
        { lat: 59.32932, lng: 18.06858 };
    const initialZoom = container.dataset.jsInitialZoom ?? 16;

    return [mapStyle, startPosition, initialZoom];
}