import { AclaracionesSection } from "./AclaracionesSection";
import { EnlacesMods } from "./EnlacesMods";
import { PresentacionSection } from "./PresentacionSection/PresentacionSection";

export const Home = () => {
  return (
    <>
      <PresentacionSection />
      <AclaracionesSection />
      <EnlacesMods />
    </>
  );
};
