import { SearchApi } from '@helsingborg-stad/openstreetmap/js/features/createSearch/search/api';
import { CreateSearchInterface, SearchOptions } from '@helsingborg-stad/openstreetmap/js/features/createSearch/createSearchInterface';
import { Search } from '@helsingborg-stad/openstreetmap/js/features/createSearch/search';
import { SearchInterface } from '@helsingborg-stad/openstreetmap/js/features/createSearch/searchInterface';
import { SearchUi } from '@helsingborg-stad/openstreetmap/js/features/createSearch/search/searchUi';

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