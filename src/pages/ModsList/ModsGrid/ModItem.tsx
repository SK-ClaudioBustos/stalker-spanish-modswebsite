import { LazyImage } from "@component/ui/LazyImage";
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
      <article className="bg-black/80 w-3xs flex flex-col text-center text-balance items-center p-4 border-2 border-primary-light rounded h-full">
        <LazyImage
          imgPath={portadaPath}
          altText={`portada del mod ${titulo}`}
        />
        <span className="text-gray-400 font-bold">{titulo}</span>
      </article>
    </Link>
  );
};
