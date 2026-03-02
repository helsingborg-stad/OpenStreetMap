import L from "leaflet";
import { Bindable } from "../../bindableInterface";
import { Popup } from "./popup";
import { PopupInterface, PopupOptions } from "./popupInterface";
import { CreatePopupInterface } from "./createPopupInterface";

export class CreatePopup implements CreatePopupInterface {
    public create(popupOptions: PopupOptions = {}): PopupInterface {
        const popup = L.popup(popupOptions);
        return new Popup(popup);
    }
}