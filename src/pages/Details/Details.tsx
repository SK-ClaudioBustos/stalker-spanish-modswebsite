import { Modificacion } from "@tipos/mods";
import { ModPresentation } from "./ModPresentation";
import { MainContent } from "./MainContent/MainContent";
import { TechnicalSpecificationsPanel } from "./MainContent/TechnicalSpecificationsPanel";
import { BackButton } from "@component/ui/BackButton";

export const Details = ({ modData }: { modData: Modificacion | null }) => {
  if (!modData) {
    return <>Mod no encontrado</>;
  }
  return (
    <div className="min-h-screen bg-light-gray container mx-auto px-6 py-12">
      <div className="bg-primary-dark rounded-md px-4 py-2 mb-2 w-fit">
        <BackButton/>
      </div>
      
      {/* Hero Section con Portada */}
      <ModPresentation
        autor={modData.autor}
        portadaPath={modData.portadaPath}
        sinopsis={modData.sinopsis}
        titulo={modData.titulo}
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contenido Principal */}
        <MainContent modData={modData} />

        {/* Sidebar */}
        <TechnicalSpecificationsPanel modData={modData} />
      </div>
    </div>
  );
};
