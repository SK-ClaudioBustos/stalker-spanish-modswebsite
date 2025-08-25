import { ModsContextProvider } from "@context/mods.provider";
import { ModsList } from "@pages/ModsList/ModsList";
import { createFileRoute } from "@tanstack/react-router";
import { Juego } from "src/generated/graphql";

export const Route = createFileRoute("/mods/stalker/$modFolder/")({
  component: RouteComponent,
  loader: async ({ params }) => {
    switch (params.modFolder) {
      case "shadow-of-chernobyl":
        return Juego.ShadowOfChernobyl;
      case "clear-sky":
        return Juego.ClearSky;
      default:
        return Juego.CallOfPrypiat;
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
