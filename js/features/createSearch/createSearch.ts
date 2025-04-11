import { SearchApi } from './search/api';
import { CreateSearchInterface, SearchOptions } from './createSearchInterface';
import { Search } from './search';
import { SearchInterface } from './searchInterface';
import L, { Map as LeafletMap, map} from 'leaflet';
import { SearchUi } from './search/searchUi';

export class CreateSearch implements CreateSearchInterface {
    constructor() {}

    public create(searchOptions: SearchOptions = {}): SearchInterface {
        
        const SearchControl = L.Control.extend({
            onAdd: function(map: LeafletMap) {
              const container = L.DomUtil.create('div', `openstreetmap__search ${searchOptions.className || ''}`);

              container.innerHTML = `
              <input 
                type="text" 
                placeholder="Search location..." 
                style="width: 150px; padding: 4px;"
              />
            `;

              return container;
            },
            onRemove(map: LeafletMap) {
            }
          });

        const searchApi = new SearchApi();
        return new Search(
          searchApi,
          new SearchUi(new SearchControl(searchOptions), searchApi)
        );
    }
}