import { PopupInterface, PopupOptions } from "./popupInterface";

export interface CreatePopupInterface {
    create(popupOptions?: PopupOptions): PopupInterface;
}