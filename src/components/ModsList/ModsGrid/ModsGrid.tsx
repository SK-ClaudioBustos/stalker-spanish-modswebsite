import { ModItem } from "./ModItem";
import { useModsContext } from "@context/mods.context";

export const ModsGrid = () => {
  const { mods } = useModsContext();
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] justify-items-center gap-x-4 gap-y-7">
      {mods.map((item, index) => (
        <ModItem item={item} key={index} />
      ))}
    </div>
  );
};
