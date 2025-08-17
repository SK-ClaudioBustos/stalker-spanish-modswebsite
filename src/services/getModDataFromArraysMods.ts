import { Modificacion } from "@tipos/mods";

export const getModDetailsFromArraysMods = async (
  modId: string,
  modFolder: string
): Promise<Modificacion | null> => {
  let importData;
  switch (modFolder) {
    case "shadow-of-chernobyl":
      importData = import("@data/mods/SOC/soc_mods");
      break;

    case "clear-sky":
      importData = import("@data/mods/CS/cs_mods");
      break;

    default:
      importData = import("@data/mods/COP/cop_mods");
  }

  const modData = await importData.then((data) => {
    const arrayMods = data.default.flat();
    const modData = arrayMods.find((mod: Modificacion) => mod.id === modId);
    return modData;
  });

  return modData || null;
};
