import { SelectorTipo } from "../Filtros/SelectorTipo";
import { SolamenteStandaloneCheckBox } from "../Filtros/SolamenteStandaloneCheckBox";

export const MenuFiltros = () => {
  return (
    <div className="flex justify-between w-md">
      <SolamenteStandaloneCheckBox />
      <SelectorTipo />
    </div>
  );
};
