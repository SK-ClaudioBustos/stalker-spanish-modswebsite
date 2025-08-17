import { UserCode } from "@icons/svg/UserCode";
import { Modificacion } from "@tipos/mods";

interface ModPresentationProps
  extends Pick<Modificacion, "titulo" | "autor" | "sinopsis" | "portadaPath"> {}

export const ModPresentation = ({
  autor,
  sinopsis,
  titulo,
  portadaPath,
}: ModPresentationProps) => {
  return (
    <header className="px-6 py-12 bg-primary-dark flex flex-row gap-4 flex-wrap mb-6 rounded-md">
      <img
        className="w-52"
        fetchPriority="high"
        src={portadaPath}
        alt={`Portada del mod ${titulo}`}
        loading="lazy"
        decoding="async"
      />
      <div className="">
        <hgroup className="mb-4">
          <h1 className="md:text-4xl text-xl font-bold mb-0">{titulo}</h1>
          <div className="flex items-center gap-2">
            <UserCode className="size-5" />
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
