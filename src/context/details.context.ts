import { createContext, useContext } from "react";
import { Juego, ModificationData, TipoEnum } from "src/generated/graphql";

export interface DetailsContextType extends ModificationData {}

const initContextState: DetailsContextType = {
  aclaraciones: [],
  autor: "",
  caracteristicas: [],
  descripcion: "",
  enlaces: [],
  fecha_lanzamiento: "",
  id: "",
  imagenesGaleria: [],
  isStandalone: false,
  juego: Juego.ShadowOfChernobyl,
  pasosInstalacion: [],
  portadaPath: "",
  sinopsis: "",
  tipo: TipoEnum.VanillaMod,
  titulo: "",
  traduccion: "",
};

export const DetailsContext =
  createContext<DetailsContextType>(initContextState);

export const useDetailsContext = () => {
  const context = useContext(DetailsContext);
  if (!context) {
    throw new Error("useDetailsContext must be within DetailsContextProvider");
  }
  return context;
};
