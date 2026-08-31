import { SearchInterface } from "@helsingborg-stad/openstreetmap/js/features/createSearch/searchInterface";

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