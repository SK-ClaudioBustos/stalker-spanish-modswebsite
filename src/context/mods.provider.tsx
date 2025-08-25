import { ReactNode, useState } from "react";
import {
  Juego,
  TipoEnum,
  useGetModificationsQuery,
} from "src/generated/graphql";
import { ModsContext, ModsContextType } from "./mods.context";

interface ModsContextProps {
  juego: Juego;
  children: ReactNode;
}

export const ModsContextProvider = ({ juego, children }: ModsContextProps) => {
  const [tipoModifications, setTipoModifications] = useState<TipoEnum>(
    TipoEnum.VanillaMod
  );

  const {
    data: modifications,
    loading: loadingModifications,
    error: errorModifications,
  } = useGetModificationsQuery({
    variables: {
      params: {
        juego,
        tipo: tipoModifications,
      },
    },
  });

  const handleSelectModsByType = (tipo: string) => {
    switch (tipo) {
      case "VANILLA_MODS":
        setTipoModifications(TipoEnum.VanillaMod);
        break;

      case "HISTORIA":
        setTipoModifications(TipoEnum.Historia);
        break;

      default:
        setTipoModifications(TipoEnum.Freeplay);
        break;
    }
  };

  const value: ModsContextType = {
    mods: modifications,
    isLoading: loadingModifications,
    error: errorModifications,
    handleSelectModsByType,
  };

  return <ModsContext value={value}>{children}</ModsContext>;
};
