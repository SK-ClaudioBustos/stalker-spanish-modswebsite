import { ModsContextProvider } from "@context/mods.provider";
import { ModsList } from "@pages/ModsList/ModsList";
import { createFileRoute } from "@tanstack/react-router";
import { JuegoEnum } from "@tipos/mods";

export const Route = createFileRoute("/mods/stalker/$modFolder/")({
  component: RouteComponent,
  loader: async ({ params }) => {
    switch (params.modFolder) {
      case "shadow-of-chernobyl":
        return JuegoEnum.SHADOW_OF_CHERNOBYL;
      case "clear-sky":
        return JuegoEnum.CLEAR_SKY;
      default:
        return JuegoEnum.CALL_OF_PRYPIAT;
    }
  },
});

function RouteComponent() {
  const juego = Route.useLoaderData();
  return (
    <ModsContextProvider juego={juego}>
      <ModsList />
    </ModsContextProvider>
  );
}
