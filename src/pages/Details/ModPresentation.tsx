import { LazyImage } from "@component/ui/LazyImage";
import { useDetailsContext } from "@context/details.context";
import { UserCodeIcon } from "@icons/svg/UserCodeIcon";

export const ModPresentation = () => {
  const { autor, sinopsis, titulo, portadaPath } = useDetailsContext();
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
