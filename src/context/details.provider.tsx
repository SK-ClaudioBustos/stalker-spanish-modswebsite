import { ReactNode } from "react";
import { Juego, ModificationData, TipoEnum } from "src/generated/graphql";
import { DetailsContext, DetailsContextType } from "./details.context";

interface ContextParams {
  modDetails: ModificationData | undefined;
  children: ReactNode;
}

export const DetailsProvider = ({ modDetails, children }: ContextParams) => {
  const value: DetailsContextType = {
    aclaraciones: modDetails?.aclaraciones ?? [],
    autor: modDetails?.autor ?? "",
    caracteristicas: modDetails?.caracteristicas ?? [],
    descripcion: modDetails?.descripcion ?? "",
    enlaces: modDetails?.enlaces ?? [],
    fecha_lanzamiento: modDetails?.fecha_lanzamiento ?? "",
    id: modDetails?.id ?? "",
    imagenesGaleria: modDetails?.imagenesGaleria ?? [],
    isStandalone: modDetails?.isStandalone ?? false,
    pasosInstalacion: modDetails?.pasosInstalacion ?? [],
    portadaPath: modDetails?.portadaPath ?? "",
    sinopsis: modDetails?.sinopsis ?? "",
    titulo: modDetails?.titulo ?? "",
    traduccion: modDetails?.traduccion ?? "",
    juego: modDetails?.juego ?? Juego.ShadowOfChernobyl,
    tipo: modDetails?.tipo ?? TipoEnum.VanillaMod,
  };
  return <DetailsContext value={value}>{children}</DetailsContext>;
};
