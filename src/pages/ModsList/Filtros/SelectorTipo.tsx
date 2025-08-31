import { useModsContext } from "@context/mods.context";
import { ChangeEventHandler, useState } from "react";
import { TipoEnum } from "src/generated/graphql";

export const SelectorTipo = () => {
  const { handleSelectModsByType } = useModsContext();
  const [tipo, setTipo] = useState<TipoEnum>(TipoEnum.VanillaMod);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const tipoSeleccionado = e.target.value as unknown as TipoEnum;
    setTipo(tipoSeleccionado);
    handleSelectModsByType(e.target.value);
  };

  return (
    <div className="flex items-center gap-2 justify-between">
      <label
        htmlFor="countries"
        className="text-sm font-medium text-gray-900 dark:text-white"
      >
        Tipo de mods
      </label>
      <select
        id="countries"
        value={tipo}
        onChange={handleChange}
        className="selector"
      >
        <option value="VANILLA_MODS">Vanilla + Mods</option>
        <option value="HISTORIA">Historia</option>
        <option value="FREEPLAYS">Freeplays</option>
      </select>
    </div>
  );
};
