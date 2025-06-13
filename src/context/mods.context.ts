import { Modificacion } from "@tipos/mods";
import { createContext, use } from "react";

const initValue: ModsContextType = {
  mods: [],
  handleSelectModsByType: () => {},
};

export interface ModsContextType {
  mods: Modificacion[];
  handleSelectModsByType: (tipo: string) => void;
}

export const ModsContext = createContext<ModsContextType>(initValue);

export const useModsContext = () => {
  const context = use(ModsContext);

  if (!context) {
    throw new Error("You must use useModsContext between ModsContextProvider");
  }

  return context;
};
