import { Gallery } from "./Gallery";
import { InformationTabs } from "./InformationTabs/InformationTabs";
import { WarningsBox } from "./WarningsBox/WarningsBox";

export const MainContent = () => {
  return (
    <main className="lg:col-span-2 space-y-8">
      {/* Tabs de Información */}
      <InformationTabs />

      {/* Información Adicional */}
      <WarningsBox />

      {/* Galería */}
      <Gallery />
    </main>
  );
};
