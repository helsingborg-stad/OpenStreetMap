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

        return new Search(
          new SearchApi(),
          new SearchUi(new SearchControl(searchOptions))
        );

        // public create(): SearchInterface {
        //   const settings: any = {
        //       notFoundMessage: 'Sorry, that address could not be found.',
        //       provider: new OpenStreetMapProvider({
        //           params: {
        //               'accept-language': 'sv',
        //               countrycodes: 'se',
        //               addressdetails: 1,
        //           },
        //       }),
        //       style: 'button',
        //   };
        //   const searchControl = new (GeoSearchControl as any)(settings);
    }
}