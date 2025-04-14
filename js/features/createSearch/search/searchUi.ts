import L, { Map as LeafletMap} from 'leaflet';
import { MapInterface } from '../../createMap/mapInterface';
import { SearchApiInterface, SearchLocationListItem, SearchUiInterface } from '../searchInterface';
import { SearchOptions } from '../createSearchInterface';

export class SearchUi implements SearchUiInterface {
    private searchContainer: HTMLElement|undefined = undefined;

    constructor(private searchOptions: SearchOptions, private searchApi: SearchApiInterface) {}

    private listenForInput(): void {
        const debouncedSearch = this.debounce((value: string) => {
            this.searchApi.search(value);
        }, 500);

        this.getInput()?.addEventListener('input', (e: Event) => {
            const input = e.target as HTMLInputElement;
            debouncedSearch(input.value);
        });
    }

    private debounce(func: (...args: any[]) => void, wait: number): (...args: any[]) => void {
        let timeout: number | undefined;
    
        return (...args: any[]) => {
            clearTimeout(timeout);
            timeout = window.setTimeout(() => func(...args), wait);
        };
    }

    public setSearchListItems(items: SearchLocationListItem[]): this {
        const listContainer = this.getList();
        if (!listContainer) {
            throw new Error('List container not found');
        }

        listContainer.innerHTML = '';

        items.forEach(item => {
            const listItem = this.createListItem(item);

            listItem.addEventListener('click', () => {
                // this.listeners['click']?.forEach(callback => {
                //     callback(item);
                // });
            });

            listContainer.appendChild(listItem);
        });

        return this;
    }

    private createListItem(item: SearchLocationListItem): HTMLLIElement {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.title}</span>`;

        return li;
    }

    public addTo(map: MapInterface): this {
        const container = document.createElement('div');
        container.className = `openstreetmap__search ${this.searchOptions.className || ''}`;

        container.innerHTML = `
            <input type="text" placeholder="Search location..." />
            <ul></ul>
        `;

        const controlContainer = (map.getAddable() as LeafletMap).getContainer()?.querySelector('.leaflet-control-container');
        controlContainer?.appendChild(container);
        this.searchContainer = container;
        this.listenForInput();

        return this;
    }

    public removeSearch(): this {
        this.getContainer()?.remove();
        this.currentMap = null;
        this.searchContainer = undefined;
        return this;
    }

    private getList(): HTMLElement|undefined {
        return this.getContainer()?.querySelector('ul') as HTMLElement;
    }

    public getInput(): HTMLInputElement|undefined {
        return this.getContainer()?.querySelector('input') as HTMLInputElement;
    }

    public getContainer(): HTMLElement|undefined {
        return this.searchContainer;
    }
}