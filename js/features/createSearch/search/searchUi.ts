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
            this.showSpinner();
            this.searchApi.search(value)
            .then((data: PlaceObject[]) => {
                this.hideSpinner();
                this.setSearchListItems(data);
            });
        }, 500);

        this.getInput()?.addEventListener('input', (e: Event) => {
            const input = e.target as HTMLInputElement;
            this.currentValue = input.value;
            this.currentValue.length > 0 ? this.showResetButton() : this.hideResetButton();
            debouncedSearch(input.value);
        });
    }

    public addListItemListener(searchEventCallback: ListItemClickListener): this {
        this.itemClickListeners.push(searchEventCallback);
        return this;
    }

    public setSearchListItems(items: PlaceObject[]|null): this {
        const listContainer = this.getList();
        if (!listContainer) {
            throw new Error('List container not found');
        }

        if (items === null) {
            listContainer.innerHTML = '';
            return this;
        }
        else if ((items.length < 1 && this.currentValue.length > 0)) {
            listContainer.innerHTML = `<li>${this.searchOptions.noResultsText ?? 'No items found.'}</li>`;
        } else {
            listContainer.innerHTML = '';
        }

        items.forEach((item: PlaceObject) => {
            const listItem = this.createListItem(item);

            listItem.addEventListener('click', () => {
                this.itemClickListeners.forEach(listener => listener(item));
                if (this.input) {
                    this.input.value = this.getTitleFromPlaceSchema(item);
                    this.input.focus();
                }

                this.getList()!.innerHTML = '';
            });

            listContainer.appendChild(listItem);
        });

        return this;
    }

    private createListItem(item: PlaceObject): HTMLLIElement {
        const title = this.getTitleFromPlaceSchema(item);
        const li = document.createElement('li');
        li.innerHTML = `<span>${title}</span>`;

        return li;
    }

    public getTitleFromPlaceSchema(item: PlaceObject): string {
        if (!item.address) {
            return item.name as string ?? '';
        }

        if (typeof item.address !== 'object') {
            return item.address;
        }

        if ('name' in item.address) {
            return item.address.name as string;
        }

        const address = [];

        if (item.name) {
            address.push(item.name);
        }

        if ('streetAddress' in item.address) {
            address.push(item.address.streetAddress);
        }

        if ('addressLocality' in item.address) {
            address.push(item.address.addressLocality);
        }

        if ('addressRegion' in item.address) {
            address.push(item.address.addressRegion);
        }

        if ('postalCode' in item.address) {
            address.push(item.address.postalCode);
        }

        if ('addressCountry' in item.address) {
            address.push(item.address.addressCountry);
        }

        return address.length > 0 ? address.join(', ') : item.name as string ?? '';
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

        L.DomEvent.disableClickPropagation(this.getContainer()!);
        L.DomEvent.disableScrollPropagation(this.getContainer()!);

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

    public hideSpinner(): this {
        if (!this.getSpinner()) {
            return this;
        }
        this.getSpinner()!.style.display = 'none';
        return this;
    }

    public showSpinner(): this {
        if (!this.getSpinner()) {
            return this;
        }

        this.getSpinner()!.style.display = 'inline-block';
        return this;
    }

    public hideResetButton(): this {
        if (!this.getResetButton()) {
            return this;
        }

        this.getResetButton()!.style.display = 'none';
        return this;
    }

    public showResetButton(): this {
        if (!this.getResetButton()) {
            return this;
        }

        this.getResetButton()!.style.display = 'block';
        return this;
    }

    public setValue(value: string): this {
        this.currentValue = value;
        if (this.getInput()) {
            this.getInput()!.value = value;
        }

        return this;
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

    public getResetButton(): HTMLElement|undefined {
        if (!this.resetButton) {
            this.resetButton = this.getContainer()?.querySelector('[data-js-search-reset]') ?? undefined;
        }

        return this.resetButton;
    }
    
    public getInput(): HTMLInputElement|undefined {
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