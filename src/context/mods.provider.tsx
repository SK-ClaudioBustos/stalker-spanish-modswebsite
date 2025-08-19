import { useQuery } from "@tanstack/react-query";
import { JuegoEnum, TipoMod } from "@tipos/mods";
import { ReactNode, useState } from "react";
import { ModsContext, ModsContextType } from "./mods.context";
import { getModifications } from "@services/getModifications";

interface ModsContextProps {
  juego: JuegoEnum;
  children: ReactNode;
}

export const ModsContextProvider = ({ juego, children }: ModsContextProps) => {
  const [tipoModifications, setTipoModifications] = useState<TipoMod>(
    TipoMod.VANILLA_MOD
  );
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["mods", juego, tipoModifications.toString()],
    queryFn: () => getModifications(juego, tipoModifications),
  });

  const handleSelectModsByType = (tipo: string) => {
    switch (tipo) {
      case "VANILLA_MODS":
        setTipoModifications(TipoMod.VANILLA_MOD);
        break;

      case "HISTORIA":
        setTipoModifications(TipoMod.HISTORIA);
        break;

      default:
        setTipoModifications(TipoMod.FREEPLAY);
        break;
    }
  };
  
  const value: ModsContextType = {
    mods: isLoading ? [] : data.data,
    isLoading,
    isError,
    error,
    handleSelectModsByType,
  };

  return <ModsContext value={value}>{children}</ModsContext>;
};
