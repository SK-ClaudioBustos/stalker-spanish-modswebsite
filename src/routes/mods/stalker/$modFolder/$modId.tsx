import { Details } from "@pages/Details/Details";
import { getModDetailsFromArraysMods } from "@services/getModDataFromArraysMods";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mods/stalker/$modFolder/$modId")({
  component: RouteComponent,
  loader: async ({params}) => getModDetailsFromArraysMods(params.modId, params.modFolder),
});

function RouteComponent() {
  const modData = Route.useLoaderData();
  return <Details modData={modData} />;
}
