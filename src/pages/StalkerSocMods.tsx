import { ModsList } from "@component/ModsList/ModsList";
import { SOC_VANILLA_MODS } from "@data/mods/SOC/soc_vanilla_mod";
import { SOC_HISTORIA_MODS } from "@data/mods/SOC/soc_historia_mods";
import { ModsContextProvider } from "src/context/mods.provider";

export const StalkerSocMods = () => {
    const modsCollection = [SOC_VANILLA_MODS,SOC_HISTORIA_MODS,[]];
    return(
        <ModsContextProvider modsCollection={modsCollection}>
            <ModsList/>
        </ModsContextProvider>
    );
}