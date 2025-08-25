import { BackButton } from "@component/ui/BackButton";
import { MainContent } from "./MainContent/MainContent";
import { TechnicalSpecificationsPanel } from "./MainContent/TechnicalSpecificationsPanel";
import { ModPresentation } from "./ModPresentation";

export const Details = () => {
  return (
    <div className="min-h-screen bg-light-gray container mx-auto px-6 py-12">
      <div className="bg-primary-dark rounded-md px-4 py-2 mb-2 w-fit">
        <BackButton />
      </div>

      {/* Hero Section con Portada */}
      <ModPresentation />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contenido Principal */}
        <MainContent />

        {/* Sidebar */}
        <TechnicalSpecificationsPanel />
      </div>
    </div>
  );
};
