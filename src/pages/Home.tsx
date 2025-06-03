import { PresentacionSection } from "@section/PresentacionSection/PresentacionSection";
import { AclaracionesSection } from "@section/AclaracionesSection/AclaracionesSection";
import { EnlacesMods } from "@section/EnlacesMods/EnlacesMods";

export const Home = () => {
  return (
    <>
      <PresentacionSection />
      <AclaracionesSection />
      <EnlacesMods />
    </>
  );
};
