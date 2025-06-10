import { Modificacion } from "@tipos/mods";

interface GameItemProps {
  item: Modificacion;
}

export const ModItem = ({ item }: GameItemProps) => {
  const { portadaPath, titulo } = item;
  return (
    <article className="bg-black/80 w-3xs flex flex-col text-center text-balance items-center p-4 border-6 border-double border-gray-400">
      <img
        className="aspect-2/3 object-cover w-50"
        src={portadaPath}
        alt={`portada del mod ${titulo}`}
      />
      <span className="text-gray-400 font-bold">{titulo}</span>
    </article>
  );
};
