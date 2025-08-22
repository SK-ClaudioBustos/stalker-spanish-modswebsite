import { LazyImage } from "@component/ui/LazyImage";
import { UserCodeIcon } from "@icons/svg/UserCodeIcon";
import { Modificacion } from "@tipos/mods";

interface ModPresentationProps
  extends Pick<Modificacion, "titulo" | "autor" | "sinopsis" | "portadaPath"> {}

export const ModPresentation = ({
  autor,
  sinopsis,
  titulo,
  portadaPath,
}: ModPresentationProps) => {
  const imgPath = `/img/${portadaPath}/portada.webp`;
  return (
    <header className="px-6 py-12 bg-primary-dark flex flex-row gap-4 flex-wrap mb-6 rounded-md">
      <picture className="aspect-2/3 object-cover w-50">
        <LazyImage imgPath={imgPath} altText={`Portada del mod ${titulo}`} />
      </picture>
      <div className="">
        <hgroup className="mb-4">
          <h1 className="md:text-4xl text-xl font-bold mb-0">{titulo}</h1>
          <div className="flex items-center gap-2">
            <UserCodeIcon className="size-5" />
            <span className="text-lg">{autor}</span>
          </div>
        </hgroup>
        <p className="text-l/7 w-full md:max-w-[100ch] text-justify">
          {sinopsis}
        </p>
      </div>
    </header>
  );
};
