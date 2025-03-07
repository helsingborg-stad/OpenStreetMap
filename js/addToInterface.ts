import { Addable } from "./addableInterface";

export interface AddTo {
    addTo(addable: Addable): any;
}