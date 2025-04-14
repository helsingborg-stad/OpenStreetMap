import { SearchCallback } from "../../../types";
import { SearchApiInterface, SearchUiInterface } from "../searchInterface";

export class SearchApi implements SearchApiInterface {
    private apiUrl: URL|null = null;
    private searchParam: string|null = null;
    private searchListeners: SearchCallback[] = [];
    private searchResults: any = {};

    public search(question: string): any {
        if (this.apiUrl === null || this.searchParam === null) {
            throw new Error("API URL and search parameter must be set before searching.");
        }

        // Check if the question is already cached
        if (this.searchResults[question]) {
            this.searchListeners.forEach(callback => callback(this.searchResults[question]));
            return this;
        }

        // If the question is empty, return empty results
        if (question.length < 1) {
            this.searchListeners.forEach(callback => callback([]));
            return this;
        }

        const url = new URL(this.apiUrl);
        url.searchParams.set(this.searchParam, question);

        fetch(url.toString())
            .then(response => response.json())
            .then(data => {
                this.searchResults[question] = data;
                this.searchListeners.forEach(callback => callback(data));
            })
            .catch(error => console.error('Error:', error));

        return this;
    }

    public addSearchListener(callback: SearchCallback): this {
        this.searchListeners.push(callback);
        return this;
    }

    public setSearchParam(searchParam: string): this {
        this.searchParam = searchParam;
        return this;
    }

    public setApiUrl(url: string): this {
        this.apiUrl = new URL(url);
        return this;
    }
}