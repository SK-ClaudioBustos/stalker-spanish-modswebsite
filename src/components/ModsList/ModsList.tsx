import { ModsGrid } from "@component/ModsList/ModsGrid/ModsGrid";
import { MenuFiltros } from "./MenuFiltros";

export const ModsList = () => {
  return (
    <section className="flex flex-col gap-y-15">
      <MenuFiltros />
      <ModsGrid />
    </section>
  );
};
