import { Popup as LeafletPopup } from "leaflet";
import { Bindable } from "../../bindableInterface";
import { PopupInterface, PopupOptions } from "./popupInterface";


export class Popup implements PopupInterface {
    constructor(private popup: LeafletPopup) { }

    public bindTo(bindable: Bindable, options: PopupOptions = {}): this {
        bindable.getBindable().bindPopup(this.popup, options);
        return this;
    }

    public unbind(): this {
        this.popup.unbindPopup();
        return this;
    }

    public getElement(): HTMLElement | null {
        return this.popup.getElement() ?? null;
    }

    public open(): this {
        this.popup.openPopup();
        return this;
    }

    public close(): this {
        this.popup.close();
        return this;
    }

    public toggle(): this {
        this.popup.toggle();
        return this;
    }

    public isOpen(): boolean {
        return this.popup.isOpen();
    }

    public setContent(content: string | HTMLElement): this {
        this.popup.setContent(content);
        return this;
    }
}