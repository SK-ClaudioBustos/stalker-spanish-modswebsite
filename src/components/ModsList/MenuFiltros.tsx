import { SelectorTipo } from "./Filtros/SelectorTipo";

export const MenuFiltros = () => {
  return (
    <header className="bg-black/80 w-full px-4 min-h-20 flex flex-row items-center justify-between">
        <SelectorTipo />
    </header>
  );
};
