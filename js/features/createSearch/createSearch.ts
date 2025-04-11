import { CreateSearchInterface, SearchOptions } from './createSearchInterface';
import { Search } from './search';
import { SearchInterface } from './searchInterface';
import L, { Map as LeafletMap, map} from 'leaflet';

export class CreateSearch implements CreateSearchInterface {
    constructor() {}

    public create(searchOptions: SearchOptions = {}): SearchInterface {
        
        const SearchControl = L.Control.extend({
            onAdd: function(map: LeafletMap) {
              const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
              container.style.backgroundColor = 'white';
              container.style.padding = '5px';
          
              const input = L.DomUtil.create('input', '', container);
              input.type = 'text';
              input.placeholder = 'Search location...';
          
              return container;
            },
            onRemove(map: LeafletMap) {
            }
          });

        return new Search(new SearchControl(searchOptions));
    }
}