import { Bindable } from "../../bindableInterface";

export interface PopupInterface {
    setContent(content: string | HTMLElement): this;
    bindTo(bindable: Bindable, options?: PopupOptions): this;
    unbind(): this;
    getElement(): HTMLElement | null;
    open(): this;
    close(): this;
    toggle(): this;
    isOpen(): boolean;
}

export type PopupOptions = {
    offset?: [number, number],
    maxWidth?: number,
    maxHeight?: number,
    className?: string,
    closeButton?: boolean,
    keepInView?: boolean
}