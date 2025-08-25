import { DetailsProvider } from "@context/details.provider";
import { Details } from "@pages/Details/Details";
import { createFileRoute } from "@tanstack/react-router";
import { useGetModificationQuery } from "src/generated/graphql";

export const Route = createFileRoute("/mods/stalker/$modFolder/$modId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { modId } = Route.useParams();
  const {
    data: modificationData,
    loading: loadingModificationData,
    error: errorModificationData,
  } = useGetModificationQuery({
    variables: {
      args: {
        id: modId,
      },
    },
  });

  if (loadingModificationData) {
    return <div className="bg-primary-dark">Loading...</div>;
  }

  if (errorModificationData) {
    return (
      <div className="bg-primary-dark">
        Error: {errorModificationData.message}
      </div>
    );
  }

  return (
    <DetailsProvider modDetails={modificationData?.getModification}>
      <Details />
    </DetailsProvider>
  );
}
