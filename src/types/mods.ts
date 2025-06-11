export interface EnlaceMetadata {
    url: string;
    texto: string;
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