import { SearchApiInterface } from "../searchInterface";

export class SearchApi implements SearchApiInterface {
    private apiUrl: string = '';

    public setApiUrl(url: string): this {
        this.apiUrl = url;
        return this;
    }

    public getApiUrl(): string {
        return this.apiUrl;
    }

    public search(searchString: string): this {
        console.log(`Searching for: ${searchString}`);
        return this;
    }
}