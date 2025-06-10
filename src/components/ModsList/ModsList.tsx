import { ModsGrid } from "@component/ModsList/ModsGrid/ModsGrid";
import { SOC_VANILLA_MODS } from "@data/mods/SOC/soc_vanilla_mod";
import { MenuFiltros } from "./MenuFiltros";

export const ModsList = () => {
  return (
    <section className="flex flex-col gap-y-15">
      <MenuFiltros />
      <ModsGrid items={SOC_VANILLA_MODS} />
    </section>
  );
};
