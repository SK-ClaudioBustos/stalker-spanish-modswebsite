import { ModsList } from "@component/ModsList/ModsList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mods/stalker/shadow-of-chernobyl")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ModsList />;
}
