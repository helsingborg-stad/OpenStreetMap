export type MapStyle = "dark"|"pale"|"default"|"color";

export type TilesObject = {
    url: string,
    attribution: string
}

export interface TilesHelperInterface {
    getDefaultTiles(style: string): TilesObject
}