import { Popup as LeafletPopup } from "leaflet";
import { Bindable } from "../../bindableInterface";
import { PopupInterface, PopupOptions } from "./popupInterface";


export class Popup implements PopupInterface {
    private bindable: Bindable | null = null;
    constructor(private popup: LeafletPopup) { }

    public bindTo(bindable: Bindable, options: PopupOptions = {}): this {
        this.getBindable()?.getBindable().unbindPopup();
        this.bindable = bindable;
        bindable.getBindable().bindPopup(this.popup, options);
        return this;
    }

    public unbind(): this {
        this.getBindable()?.getBindable().unbindPopup();
        this.bindable = null;
        return this;
    }

    public getElement(): HTMLElement | null {
        return this.popup.getElement() ?? null;
    }

    public open(): this {
        this.getBindable()?.getBindable().openPopup();
        return this;
    }

    public close(): this {
        this.getBindable()?.getBindable().closePopup();
        return this;
    }

    public toggle(): this {
        this.getBindable()?.getBindable().togglePopup();
        return this;
    }

    public isOpen(): boolean {
        return this.getBindable()?.getBindable().isPopupOpen() ?? false;
    }

    public setContent(content: string | HTMLElement): this {
        this.getBindable()?.getBindable().setPopupContent(content);
        return this;
    }

    public getBindable(): Bindable | null {
        return this.bindable;
    }
}