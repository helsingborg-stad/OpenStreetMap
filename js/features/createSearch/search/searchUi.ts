import L, { Map as LeafletMap} from 'leaflet';
import { MapInterface } from '../../createMap/mapInterface';
import { ListItemClickListener, SearchApiInterface, SearchLocationListItem, SearchUiInterface } from '../searchInterface';
import { SearchOptions } from '../createSearchInterface';

export class SearchUi implements SearchUiInterface {
    private searchContainer: HTMLElement|undefined = undefined;
    private list: HTMLElement|undefined = undefined;
    private input: HTMLInputElement|undefined = undefined;
    private itemClickListeners: ListItemClickListener[] = [];
    private currentValue: string = '';

    constructor(private searchOptions: SearchOptions, private searchApi: SearchApiInterface) {}

    private listenForInput(): void {
        const debouncedSearch = this.debounce((value: string) => {
            this.searchApi.search(value);
        }, 500);

        this.getInput()?.addEventListener('input', (e: Event) => {
            const input = e.target as HTMLInputElement;
            this.currentValue = input.value;
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

    public addListItemListener(searchEventCallback: ListItemClickListener): this {
        this.itemClickListeners.push(searchEventCallback);
        return this;
    }

    public setSearchListItems(items: SearchLocationListItem[]): this {
        const listContainer = this.getList();
        if (!listContainer) {
            throw new Error('List container not found');
        }

        if (items.length < 1 && this.currentValue.length > 0) {
            listContainer.innerHTML = `<li>${this.searchOptions.noResultsText ?? 'No items found.'}</li>`;
        } else {
            listContainer.innerHTML = '';
        }

        items.forEach(item => {
            const listItem = this.createListItem(item);

            listItem.addEventListener('click', () => {
                this.itemClickListeners.forEach(listener => listener(item));
                if (this.input) {
                    this.input.value = item.title;
                    this.input.focus();
                }

                this.getList()!.innerHTML = '';
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
        this.stopDblClickZoom();

        this.listenForInput();

        return this;
    }

    public removeSearch(): this {
        this.getContainer()?.remove();
        this.searchContainer = undefined;
        this.list = undefined;
        this.input = undefined;
        return this;
    }

    private stopDblClickZoom(): void {
        this.getContainer()?.addEventListener('dblclick', (e: Event) => {
            e.stopPropagation();
        });
    }

    public getContainer(): HTMLElement|undefined {
        return this.searchContainer;
    }
    
    private getInput(): HTMLInputElement|undefined {
        if (!this.input) {
            this.input = this.getContainer()?.querySelector('input') ?? undefined;
        }

        return this.input;
    }
    
    private getList(): HTMLElement|undefined {
        if (!this.list) {
            this.list = this.getContainer()?.querySelector('ul') ?? undefined;
        }

        return this.list;
    }
}