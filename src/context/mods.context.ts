import { createContext, use } from "react";

const initValue: ModsContextType = {
  mods: [],
  isError: false,
  isLoading: false,
  error: null,

  handleSelectModsByType: () => {},
};

export interface ModsContextType {
  mods: any[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
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
