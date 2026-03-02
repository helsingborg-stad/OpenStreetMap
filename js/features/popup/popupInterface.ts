import { Bindable } from "../../bindableInterface";

export interface PopupInterface {
    setPopupContent(bindable: Bindable, content: string | HTMLElement): Bindable;
    bindTo(bindable: Bindable, content: string | HTMLElement, options?: PopupOptions): Bindable;
    unbindPopup(bindable: Bindable): Bindable;
    openPopup(bindable: Bindable): Bindable;
    closePopup(bindable: Bindable): Bindable;
    togglePopup(bindable: Bindable): Bindable;
    isPopupOpen(bindable: Bindable): boolean;
    getPopup(bindable: Bindable): this | null;
}

export type PopupOptions = {
    offset?: [number, number],
    maxWidth?: number,
    maxHeight?: number,
    className?: string,
    closeButton?: boolean,
    keepInView?: boolean
}