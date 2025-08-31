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

  const [standaloneFilter, setStandaloneFilter] = useState<boolean | undefined>(
    undefined
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
        isStandalone: standaloneFilter,
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
    }
  };

  const handleChangeStandaloneFilter = (filter: string) => {
    setStandaloneFilter(false);
    switch (filter) {
      case "ALL":
        setStandaloneFilter(undefined);
        break;

      case "STANDALONE":
        setStandaloneFilter(true);
        break;

      default:
        // Los mods que no son standalone
        setStandaloneFilter(false);
    }
  };

  const value: ModsContextType = {
    mods: modifications,
    isLoading: loadingModifications,
    error: errorModifications,
    handleSelectModsByType,
    handleChangeStandaloneFilter,
  };

  return <ModsContext value={value}>{children}</ModsContext>;
};
