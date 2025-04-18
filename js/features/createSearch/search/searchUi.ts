import L, { Map as LeafletMap} from 'leaflet';
import { MapInterface } from '../../createMap/mapInterface';
import { ListItemClickListener, PlaceObject, SearchApiInterface, SearchUiInterface } from '../searchInterface';
import { SearchOptions } from '../createSearchInterface';

export class SearchUi implements SearchUiInterface {
    private searchContainer: HTMLElement|undefined = undefined;
    private list: HTMLElement|undefined = undefined;
    private input: HTMLInputElement|undefined = undefined;
    private resetButton: HTMLElement|undefined = undefined;
    private spinner: HTMLElement|undefined = undefined;
    private itemClickListeners: ListItemClickListener[] = [];
    private currentValue: string = '';

    constructor(private searchOptions: SearchOptions, private searchApi: SearchApiInterface) {}

    private listenForInput(): void {
        const debouncedSearch = this.debounce((value: string) => {
            this.showOrHideSpinner(true);
            this.searchApi.search(value)
            .then((data: PlaceObject[]) => {
                this.showOrHideSpinner(false);
                this.setSearchListItems(data);
            });
        }, 500);

        this.getInput()?.addEventListener('input', (e: Event) => {
            const input = e.target as HTMLInputElement;
            this.currentValue = input.value;
            this.showOrHideReset();
            debouncedSearch(input.value);
        });
    }

    public addListItemListener(searchEventCallback: ListItemClickListener): this {
        this.itemClickListeners.push(searchEventCallback);
        return this;
    }

    public setSearchListItems(items: PlaceObject[]): this {
        const listContainer = this.getList();
        if (!listContainer) {
            throw new Error('List container not found');
        }

        if (items.length < 1 && this.currentValue.length > 0) {
            listContainer.innerHTML = `<li>${this.searchOptions.noResultsText ?? 'No items found.'}</li>`;
        } else {
            listContainer.innerHTML = '';
        }

        items.forEach((item: PlaceObject) => {
            const listItem = this.createListItem(item);

            listItem.addEventListener('click', () => {
                this.itemClickListeners.forEach(listener => listener(item));
                if (this.input) {
                    this.input.value = item.address as string;
                    this.input.focus();
                }

                this.getList()!.innerHTML = '';
            });

            listContainer.appendChild(listItem);
        });

        return this;
    }

    private createListItem(item: PlaceObject): HTMLLIElement {
        console.log(item);
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.address}</span>`;

        return li;
    }

    public addTo(map: MapInterface): this {
        const container = document.createElement('div');
        container.className = `openstreetmap__search ${this.searchOptions.className || ''}`;

        container.innerHTML = `
            <div class="openstreetmap__search-container">
                <input type="text" placeholder="${this.searchOptions.placeholder ?? 'Search location...'}" />
                <span class="openstreetmap__search-spinner" data-js-search-spinner="true"></span>
                <span class="openstreetmap__search-reset" data-js-search-reset="true" role="button" aria-label="${this.searchOptions.resetButtonLabel ?? 'Reset search'}">&#10005;</span>
            </div>
            <ul></ul>
        `;

        const controlContainer = (map.getAddable() as LeafletMap).getContainer()?.querySelector('.leaflet-control-container');
        controlContainer?.appendChild(container);
        this.searchContainer = container;

        this.stopDblClickZoom();
        this.listenForInput();
        this.listenForResetButton();

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
    
    private listenForResetButton(): void {
        this.getResetButton()?.addEventListener('click', (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            this.getResetButton()!.style.display = 'none';

            if (this.getList()) {
                this.getList()!.innerHTML = '';
            }

            if (this.getInput()) {
                this.getInput()!.value = '';
                this.getInput()!.focus();
            }
        });
    }

    private showOrHideSpinner(isSearching: boolean): void {
        if (!this.getSpinner()) {
            return;
        }

        if (isSearching && this.currentValue.length > 0) {
            this.getSpinner()!.style.display = 'inline-block';
        } else {
            this.getSpinner()!.style.display = 'none';
        }
    }

    private showOrHideReset(): void {
        if (!this.getResetButton()) {
            return;
        }

        if (this.currentValue.length > 0) {
            this.getResetButton()!.style.display = 'block';
        } else {
            this.getResetButton()!.style.display = 'none';
        }
    }

    public getContainer(): HTMLElement|undefined {
        return this.searchContainer;
    }

    private getSpinner(): HTMLElement|undefined {
        if (!this.spinner) {
            this.spinner = this.getContainer()?.querySelector('[data-js-search-spinner]') ?? undefined;
        }

        return this.spinner;
    }

    private getResetButton(): HTMLElement|undefined {
        if (!this.resetButton) {
            this.resetButton = this.getContainer()?.querySelector('[data-js-search-reset]') ?? undefined;
        }

        return this.resetButton;
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

    private debounce(func: (...args: any[]) => void, wait: number): (...args: any[]) => void {
        let timeout: number | undefined;
    
        return (...args: any[]) => {
            clearTimeout(timeout);
            timeout = window.setTimeout(() => func(...args), wait);
        };
    }
}