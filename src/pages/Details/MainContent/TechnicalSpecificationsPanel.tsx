import { useDetailsContext } from "@context/details.context";
import { ExternalLinkIcon } from "@icons/svg/ExternalLinkIcon";
import { LinkIcon } from "@icons/svg/LinkIcon";
import { Notes } from "./Notes";

export const TechnicalSpecificationsPanel = () => {
  const { isStandalone, fecha_lanzamiento, traduccion, enlaces } = useDetailsContext();
  return (
    <div className="space-y-6">
      {/* Ficha Técnica */}
      <div className="bg-primary-gray border-1 border-primary-dark text-primary-dark rounded-lg p-4">
        <div className="flex gap-2 items-center mb-4">
          <Notes className="size-5 text-primary-dark" />
          <h3 className="text-primary-dark font-bold">Ficha Técnica</h3>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span>Tipo</span>
              <p className="font-semibold">
                {isStandalone ? "Standalone" : "No Standalone"}
              </p>
            </div>
            <div>
              <span>Lanzamiento</span>
              <p className="font-semibold">{fecha_lanzamiento}</p>
            </div>
            <div>
              <span>Traduccion por</span>
              <p className="font-semibold">{traduccion}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enlaces de Descarga */}
      <div className="bg-primary-gray border-1 border-primary-dark rounded-lg p-4">
        <div className="flex gap-2 items-center mb-4">
          <LinkIcon className="size-5 text-primary-dark" />
          <h3 className="text-primary-dark font-bold">Enlaces</h3>
        </div>

        <div className="space-y-3">
          {enlaces.map((link, index) => (
            <a
              key={index}
              target="_blank"
              rel="noferer noopener"
              className="flex justify-between items-center bg-primary-light rounded-sm px-4 py-2"
              href={link.url}
            >
              <span className="font-bold">{link.texto}</span>
              <ExternalLinkIcon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
