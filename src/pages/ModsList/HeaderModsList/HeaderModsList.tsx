import { BackButton } from "@component/ui/BackButton";
import { MenuFiltros } from "./MenuFiltros";

export const HeaderModsList = () => {
  return (
    <header className="bg-black/80 w-full px-4 min-h-20 flex flex-row items-center justify-between rounded-md">
      <BackButton />
      <MenuFiltros />
    </header>
  );
};
