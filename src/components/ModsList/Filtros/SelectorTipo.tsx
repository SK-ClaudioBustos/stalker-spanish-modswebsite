import { useModsContext } from "@context/mods.context";
import { TipoMod } from "@tipos/mods";
import { ChangeEventHandler, useState } from "react";

export const SelectorTipo = () => {
  const { handleSelectModsByType } = useModsContext();
  const [tipo, setTipo] = useState<TipoMod>(TipoMod.VANILLA_MOD);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const tipoSeleccionado = e.target.value as unknown as TipoMod;
    setTipo(tipoSeleccionado);
    handleSelectModsByType(e.target.value);
  };

  return (
    <select value={tipo} onChange={handleChange}>
      <option value="VANILLA_MODS">Vanilla + Mods</option>
      <option value="HISTORIA">Historia</option>
      <option value="FREEPLAYS">Freeplays</option>
    </select>
  );
};
