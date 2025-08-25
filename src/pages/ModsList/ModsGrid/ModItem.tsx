import { LazyImage } from "@component/ui/LazyImage";
import { Link } from "@tanstack/react-router";
import {
  ModificationItemOutput
} from "src/generated/graphql";

interface GameItemProps {
  item: ModificationItemOutput;
  folderName: string;
}

export const ModItem = ({ item, folderName }: GameItemProps) => {
  const { portadaPath, titulo } = item;
  const imgPath = `/img/${portadaPath}/portada.webp`;
  return (
    <Link
      to="/mods/stalker/$modFolder/$modId"
      params={{ modFolder: folderName, modId: item.id }}
    >
      <article className="bg-black/80 w-3xs flex flex-col text-center text-balance items-center p-4 border-2 border-primary-light rounded h-full">
        <picture className="h-80">
          <LazyImage imgPath={imgPath} altText={`portada del mod ${titulo}`} />
        </picture>
        <span className="text-gray-400 font-bold">{titulo}</span>
      </article>
    </Link>
  );
};
