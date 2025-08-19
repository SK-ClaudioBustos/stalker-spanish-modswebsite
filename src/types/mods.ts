export interface EnlaceMetadata {
    url: string;
    texto: string;
}

export enum JuegoEnum {
    SHADOW_OF_CHERNOBYL = "SHADOW_OF_CHERNOBYL",
    CLEAR_SKY = "CLEAR_SKY",
    CALL_OF_PRYPIAT = "CALL_OF_PRYPIAT"
}

export enum TipoMod {
    VANILLA_MOD = "VANILLA_MOD",
    HISTORIA = "HISTORIA",
    FREEPLAY = "FREEPLAY"
}

export interface Modificacion {
    id: string;
    tipo: TipoMod;
    juego: JuegoEnum;
    portadaPath: string;
    titulo: string;
    autor: string;
    sinopsis: string;
    traduccion: string;
    fecha_lanzamiento: string;
    descripcion: string;
    caracteristicas: string[];
    enlaces: EnlaceMetadata[];
    isStandalone: boolean;
    imagenesGaleria: string[];
    aclaraciones?: string[];
    pasosInstalacion?: string[];
}