import { SearchInterface } from "./searchInterface";

export interface CreateSearchInterface {
    create(searchOptions: SearchOptions): SearchInterface;
}

export type SearchOptions = {
    className?: string;
    apiUrl?: string;
    apiSearchParam?: string;
    noResultsText?: string;
    resetButtonLabel?: string;
    placeholder?: string;
}