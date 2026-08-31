import L from "leaflet";
import { Popup } from "@helsingborg-stad/openstreetmap/js/features/createPopup/popup";
import { PopupInterface, PopupOptions } from "@helsingborg-stad/openstreetmap/js/features/createPopup/popupInterface";
import { CreatePopupInterface } from "@helsingborg-stad/openstreetmap/js/features/createPopup/createPopupInterface";

export class CreatePopup implements CreatePopupInterface {
    public create(popupOptions: PopupOptions = {}): PopupInterface {
        const popup = L.popup(popupOptions);
        return new Popup(popup);
    }
}