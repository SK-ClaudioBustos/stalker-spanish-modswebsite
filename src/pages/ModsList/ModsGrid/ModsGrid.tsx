import { useModsContext } from "@context/mods.context";
import { useLocation } from "@tanstack/react-router";
import { ModItem } from "./ModItem";

export const ModsGrid = () => {
  const { mods, isLoading, error } = useModsContext();
  const { pathname } = useLocation();
  const folderName = pathname.split("/")[3];

  if (isLoading) {
    return (
      <div className="bg-primary-dark">
        <span className="text-white">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-primary-dark">
        <span className="text-white">Error: {error?.message}</span>
      </div>
    );
  }

  if(!mods?.getModifications.modificationsCount) {
    return(
      <h1 className="text-primary-dark">
        No hay modificaciones para mostrar
      </h1>
    );
  }
  
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] justify-items-center gap-x-4 gap-y-7">
      {mods?.getModifications.modifications.map((item) => (
        <ModItem folderName={folderName} item={item} key={item.id} />
      ))}
    </div>
  );
};
