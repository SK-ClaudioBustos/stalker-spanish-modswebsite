import { Layout } from "@layout/Layout";
import { NotFound } from "@pages/NotFound";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
      <TanStackRouterDevtools />
    </Layout>
  ),
  notFoundComponent: () => <NotFound />,
});
