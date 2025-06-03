import { createFileRoute } from "@tanstack/react-router";
import { Home } from "src/pages/Home";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <Home />;
}
