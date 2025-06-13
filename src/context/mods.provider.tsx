import { Modificacion } from "@tipos/mods";
import { ReactNode, useState } from "react";
import { ModsContext, ModsContextType } from "./mods.context";

interface ModsContextProps {
  children: ReactNode;
  modsCollection: Modificacion[][];
}

export const ModsContextProvider = ({
  modsCollection,
  children,
}: ModsContextProps) => {
  const [mods, setMods] = useState<Modificacion[]>(modsCollection[0]);

  const handleSelectModsByType = (tipo: string) => {
    switch (tipo) {
      case "VANILLA_MODS":
        setMods(modsCollection[0]);
        break;

      case "HISTORIA":
        setMods(modsCollection[1]);
        break;

      default:
        setMods(modsCollection[2]);
        break;
    }
  };

  const value: ModsContextType = {
    mods,
    handleSelectModsByType,
  };

  return <ModsContext value={value}>{children}</ModsContext>;
};
