import { ModsList } from "@component/ModsList/ModsList";
import { ModsContextProvider } from "@context/mods.provider";
import { SOC_MODS } from "@data/mods/SOC/soc_mods";
import { createFileRoute } from "@tanstack/react-router";
import { Modificacion } from "@tipos/mods";

export const Route = createFileRoute("/mods/stalker/$modFolder/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { modFolder } = Route.useParams();
  const MODS_MAP: Record<string, Modificacion[][]> = {
    "shadow-of-chernobyl": SOC_MODS,
    "call-of-pripyat": SOC_MODS,
    "clear-sky": SOC_MODS,
  };
  const MODS = modFolder ? MODS_MAP[modFolder] : [];
  return (
    <ModsContextProvider modsCollection={MODS}>
      <ModsList />
    </ModsContextProvider>
  );
}
