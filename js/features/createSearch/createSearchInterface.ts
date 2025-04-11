import { SearchInterface } from "./searchInterface";

export interface CreateSearchInterface {
    create(): SearchInterface;
}

export type SearchOptions = {
    position?: "topright" | "topleft" | "bottomright" | "bottomleft";
}