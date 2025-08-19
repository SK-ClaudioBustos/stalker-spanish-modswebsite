import { Details } from "@pages/Details/Details";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mods/stalker/$modFolder/$modId")({
  component: RouteComponent,
  loader: async ({params}) => { return ''; }
});

function RouteComponent() {
  // const modData = Route.useLoaderData();
  return <Details modData={null} />;
}
