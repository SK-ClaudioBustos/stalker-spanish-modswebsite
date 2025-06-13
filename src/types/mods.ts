export interface EnlaceMetadata {
    url: string;
    texto: string;
}

export enum TipoMod {
    VANILLA_MOD,
    HISTORIA,
    FREEPLAY
}

export interface Modificacion {
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