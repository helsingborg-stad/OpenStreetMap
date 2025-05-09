import { PlaceObject, SearchApiInterface, SearchCallback } from "../searchInterface";

export class SearchApi implements SearchApiInterface {
    private apiUrl: URL|null = null;
    private searchParam: string|null = null;
    private searchListeners: SearchCallback[] = [];
    private searchResults: any = {};
    private searching: boolean = false

    public search(question: string): Promise<PlaceObject[]> {
        if (this.apiUrl === null || this.searchParam === null) {
            throw new Error("API URL and search parameter must be set before searching.");
        }

        // Check if the question is already cached
        if (this.searchResults[question]) {
            return Promise.resolve(this.searchResults[question]);
        }

        // If the question is empty, return empty results
        if (question.length < 1) {
            this.searchListeners.forEach(callback => callback([]));
            return Promise.resolve([]);
        }

        const url = new URL(this.apiUrl);
        url.searchParams.set(this.searchParam, question);
        this.searching = true;
        return fetch(url.toString())
            .then(response => response.json())
            .then(data => {
                //  Run all callback to structure the data
                const modifiedData = this.searchListeners.reduce(
                    (currentData, callback) => callback(currentData),
                    data
                );

                // Cache question results
                this.searchResults[question] = modifiedData;

                return modifiedData;
            })
            .catch(error => {
                console.error('Error:', error);
                return Promise.resolve([]);
            })
            .finally(() => {
                this.searching = false;
            });
    }

    // Adding listeners gives you a chance to change the response value
    public addSearchResponseCallback(callback: SearchCallback): this {
        this.searchListeners.push(callback);
        return this;
    }

    public isSearching(): boolean {
        return this.searching;
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