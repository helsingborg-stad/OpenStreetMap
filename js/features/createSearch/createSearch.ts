import { SearchApi } from './search/api';
import { CreateSearchInterface, SearchOptions } from './createSearchInterface';
import { Search } from './search';
import { SearchInterface } from './searchInterface';
import { SearchUi } from './search/searchUi';

export class CreateSearch implements CreateSearchInterface {
    constructor() {}

    public create(searchOptions: SearchOptions = {}): SearchInterface {
        const searchApi = new SearchApi();
  
        return new Search(
          searchApi,
          new SearchUi(searchOptions, searchApi)
        );
    }
}