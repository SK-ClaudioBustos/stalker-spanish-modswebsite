import { Link } from "@tanstack/react-router";
import { Modificacion } from "@tipos/mods";

interface GameItemProps {
  item: Modificacion;
  folderName: string;
}

export const ModItem = ({ item, folderName }: GameItemProps) => {
  const { portadaPath, titulo } = item;
  return (
    <Link
      to="/mods/stalker/$modFolder/$modId"
      params={{ modFolder: folderName, modId: item.id }}
    >
      <article className="bg-black/80 w-3xs flex flex-col text-center text-balance items-center p-4 border-6 border-double border-gray-400 h-full">
        <img
          className="aspect-2/3 object-cover w-50"
          src={portadaPath}
          alt={`portada del mod ${titulo}`}
          fetchPriority="low"
          decoding="async"
          loading="lazy"
        />
        <span className="text-gray-400 font-bold">{titulo}</span>
      </article>
    </Link>
  );
};
