import { useModsContext } from "@context/mods.context";
import { ChangeEventHandler } from "react";

export const SelectorStandalone = () => {
  const { handleChangeStandaloneFilter } = useModsContext();

  const handleSelectorStandalone: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const value: string = event.target.value;
    handleChangeStandaloneFilter(value);
  };
  return (
    <div className="flex md:items-center justify-between gap-2">
      <label
        htmlFor="standaloneFilter"
        aria-label="Mostrar solamente los mods que sean standalone"
        className="text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Filtro Standalone
      </label>
      <select
        id="standaloneFilter"
        className="selector"
        onChange={handleSelectorStandalone}
      >
        <option value="ALL">Todos</option>
        <option value="STANDALONE">Mods Standalone</option>
        <option value="NO_STANDALONE">Mods No Standalone</option>
      </select>
    </div>
  );
};
