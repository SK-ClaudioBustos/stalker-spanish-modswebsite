import { ApolloError } from "@apollo/client";
import { createContext, use } from "react";
import { GetModificationsQuery } from "src/generated/graphql";

const initValue: ModsContextType = {
  mods: undefined,
  isLoading: false,
  error: undefined,
  handleSelectModsByType: () => {},
  handleChangeStandaloneFilter: () => {}
};

export interface ModsContextType {
  mods: GetModificationsQuery | undefined;
  isLoading: boolean;
  error: ApolloError | undefined;
  handleSelectModsByType: (tipo: string) => void;
  handleChangeStandaloneFilter: (filter: string) => void;
}

export const ModsContext = createContext<ModsContextType>(initValue);

export const useModsContext = () => {
  const context = use(ModsContext);

  if (!context) {
    throw new Error("You must use useModsContext between ModsContextProvider");
  }

  return context;
};
