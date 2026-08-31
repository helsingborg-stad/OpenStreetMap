import { Addable } from "@helsingborg-stad/openstreetmap/js/addableInterface";

export interface AddTo {
    addTo(addable: Addable): any;
}