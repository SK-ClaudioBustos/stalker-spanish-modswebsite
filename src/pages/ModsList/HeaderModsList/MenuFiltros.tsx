import { SelectorTipo } from "../Filtros/SelectorTipo";
import { SelectorStandalone } from "../Filtros/SelectorStandalone";

export const MenuFiltros = () => {
  return (
    <div className="flex md:justify-between md:flex-row flex-col md:gap-0 gap-2 md:w-lg">
      <SelectorStandalone />
      <SelectorTipo />
    </div>
  );
};
