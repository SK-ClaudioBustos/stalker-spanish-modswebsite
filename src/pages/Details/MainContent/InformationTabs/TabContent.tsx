import { useDetailsContext } from "@context/details.context";
import { TabsValues } from "@tipos/tabs";
import { ReactNode } from "react";
import { DescriptionTab } from "./DescriptionTab";
import { FeaturesTab } from "./FeaturesTab";
import { InstallStepsTab } from "./InstallStepsTab";

export const TabContent = ({ tabSelected }: { tabSelected: TabsValues }) => {
  const { descripcion, caracteristicas, pasosInstalacion } =
    useDetailsContext();

  const CONTENT_MAP: Record<TabsValues, ReactNode> = {
    description: <DescriptionTab description={descripcion} />,
    features: <FeaturesTab features={caracteristicas} />,
    installation: <InstallStepsTab installSteps={pasosInstalacion} />,
  };
  return (
    <article className="bg-primary pt-4 pb-6 px-6 rounded-2xl border-1 border-primary-dark mt-6">
      {CONTENT_MAP[tabSelected]}
    </article>
  );
};
