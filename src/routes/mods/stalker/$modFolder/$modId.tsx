import { Details } from "@pages/Details/Details";
import { getModification } from "@services/getModification";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mods/stalker/$modFolder/$modId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { modId } = Route.useParams();
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["getMod", modId],
    queryFn: async () => getModification(modId),
  });

  if(isLoading){
    return <div className="bg-primary-dark">Loading...</div>;
  }

  if (isError) {
    return <div className="bg-primary-dark">Error: {error.message}</div>;
  }

  return <Details modData={data.modification} />;
}
