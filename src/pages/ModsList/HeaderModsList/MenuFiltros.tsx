import { SelectorTipo } from "../Filtros/SelectorTipo";
import { SolamenteStandaloneCheckBox } from "../Filtros/SolamenteStandaloneCheckBox";

export const MenuFiltros = () => {
  return (
    <div className="flex md:justify-between md:flex-row flex-col md:gap-0 gap-2 md:w-md">
      <SolamenteStandaloneCheckBox />
      <SelectorTipo />
    </div>
  );
};
