import { Bindable } from "../../bindableInterface";
import { PopupInterface, PopupOptions } from "./popupInterface";

export class Popup implements PopupInterface {
    public bindTo(bindable: Bindable, content: string | HTMLElement, options: PopupOptions = {}): Bindable {
        bindable.getBindable().bindPopup(content, options);
        return bindable;
    }

    public unbindPopup(bindable: Bindable): Bindable {
        bindable.getBindable().unbindPopup();
        return bindable;
    }

    public openPopup(bindable: Bindable): Bindable {
        bindable.getBindable().openPopup();
        return bindable;
    }

    public closePopup(bindable: Bindable): Bindable {
        bindable.getBindable().closePopup();
        return bindable;
    }

    public togglePopup(bindable: Bindable): Bindable {
        bindable.getBindable().togglePopup();
        return bindable;
    }

    public isPopupOpen(bindable: Bindable): boolean {
        return bindable.getBindable().isPopupOpen();
    }

    public setPopupContent(bindable: Bindable, content: string | HTMLElement): Bindable {
        bindable.getBindable().setPopupContent(content);
        return bindable;
    }

    public getPopup(bindable: Bindable): this | null {
        const popup = bindable.getBindable().getPopup();
        return popup ? this : null;
    }
}