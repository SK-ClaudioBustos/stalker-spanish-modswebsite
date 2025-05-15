import { Layout } from "./layout/Layout";
import { PresentacionSection } from "@section/PresentacionSection/PresentacionSection";
import "./styles/main.css";
import { AclaracionesSection } from "@section/AclaracionesSection/AclaracionesSection";

export const StalkerApp = () => {
  return (
    <Layout>
      <PresentacionSection />
      <AclaracionesSection />
    </Layout>
  );
};
