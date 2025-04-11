import { SearchCallback } from "../../../types";
import { SearchApiInterface, SearchUiInterface } from "../searchInterface";

export class SearchApi implements SearchApiInterface {
    private apiUrl: URL|null = null;
    private searchParam: string|null = null;
    private searchListeners: SearchCallback[] = [];

    public search(question: string): any {
        if (this.apiUrl === null || this.searchParam === null) {
            throw new Error("API URL and search parameter must be set before searching.");
        }

        const url = new URL(this.apiUrl);
        url.searchParams.set(this.searchParam, question);

        fetch(url.toString())
            .then(response => response.json())
            .then(data => {
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