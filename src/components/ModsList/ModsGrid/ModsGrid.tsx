import { useModsContext } from "@context/mods.context";
import { useLocation } from "@tanstack/react-router";
import { ModItem } from "./ModItem";

export const ModsGrid = () => {
  const { mods } = useModsContext();
  const { pathname } = useLocation();

  const folderName = pathname.split("/")[3];

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] justify-items-center gap-x-4 gap-y-7">
      {mods.map((item, index) => (
        <ModItem folderName={folderName} item={item} key={item.id} />
      ))}
    </div>
  );
};
