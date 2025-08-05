import { ModsList } from "@component/ModsList/ModsList";
import { SOC_MODS } from "@data/mods/SOC/soc_mods";
import { ModsContextProvider } from "src/context/mods.provider";

export const StalkerSocMods = () => {
    return(
        <ModsContextProvider modsCollection={SOC_MODS}>
            <ModsList/>
        </ModsContextProvider>
    );
}