import { PresentacionSection } from "@section/PresentacionSection/PresentacionSection";
import { AclaracionesSection } from "@section/PresentacionSection/AclaracionesSection";
import { EnlacesMods } from "@section/PresentacionSection/EnlacesMods";

export const Home = () => {
  return (
    <>
      <PresentacionSection />
      <AclaracionesSection />
      <EnlacesMods />
    </>
  );
};
