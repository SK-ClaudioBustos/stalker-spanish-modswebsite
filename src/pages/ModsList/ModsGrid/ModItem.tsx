import { Link } from "@tanstack/react-router";
import { Modificacion } from "@tipos/mods";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface GameItemProps {
  item: Modificacion;
  folderName: string;
}

export const ModItem = ({ item, folderName }: GameItemProps) => {
  const { portadaPath, titulo } = item;
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");

  useEffect(() => {
    const getImage = async () => {
      await import(
        /* @vite-ignore */
        `/img/${portadaPath}/portada.webp`
      ).then((image) => {
        setImage(image.default);
        setLoading(false);
      });
    };

    getImage();
  });

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <Link
      to="/mods/stalker/$modFolder/$modId"
      params={{ modFolder: folderName, modId: item.id }}
    >
      <article className="bg-black/80 w-3xs flex flex-col text-center text-balance items-center p-4 border-2 border-primary-light rounded h-full">
        <LazyLoadImage
          className="aspect-2/3 object-cover w-50"
          src={image}
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
