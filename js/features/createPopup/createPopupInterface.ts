import { PopupInterface, PopupOptions } from "@helsingborg-stad/openstreetmap/js/features/createPopup/popupInterface";

export interface CreatePopupInterface {
    create(popupOptions?: PopupOptions): PopupInterface;
}