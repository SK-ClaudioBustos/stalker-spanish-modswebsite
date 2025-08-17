import { Modificacion } from "@tipos/mods";
import { InformationTabs } from "./InformationTabs/InformationTabs";
import { Gallery } from "./Gallery";
import { WarningDetails } from "./WarningDetails";

export const MainContent = ({ modData }: { modData: Modificacion }) => {
  return (
    <main className="lg:col-span-2 space-y-8">
      {/* Tabs de Información */}
      <InformationTabs modData={modData} />

      {/* Información Adicional */}
      {modData.aclaraciones !== undefined && (
        <WarningDetails warnings={modData.aclaraciones} />
      )}

      {/* Galería */}
      <Gallery galleryItems={modData.imagenesGaleria} />
    </main>
  );
};
