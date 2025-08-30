import { BackButton } from "@component/ui/BackButton";
import { MenuFiltros } from "./MenuFiltros";

export const HeaderModsList = () => {
  return (
    <header className="bg-black/80 w-full px-4 md:py-0 py-2 min-h-20 flex md:flex-row flex-col md:items-center md:justify-between rounded-md">
      <BackButton />
      <MenuFiltros />
    </header>
  );
};
