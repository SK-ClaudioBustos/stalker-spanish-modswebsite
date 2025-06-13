import { Modificacion } from "@tipos/mods";
import { ModItem } from "./ModItem";

interface GameGridItems {
  items: Modificacion[];
}

export const ModsGrid = ({ items }: GameGridItems) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-items-center gap-x-0 gap-y-7">
      {items.map((item, index) => (
        <ModItem item={item} key={index} />
      ))}
    </div>
  );
};
