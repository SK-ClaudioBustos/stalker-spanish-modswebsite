import { ReactNode } from "@tanstack/react-router";
import { TabsValues } from "@tipos/tabs";
import { DescriptionTab } from "./DescriptionTab";
import { Modificacion } from "@tipos/mods";
import { FeaturesTab } from "./FeaturesTab";
import { InstallStepsTab } from "./InstallStepsTab";

interface TabContentProps {
  modData: Modificacion;
  tabSelected: TabsValues;
}

export const TabContent = ({ modData, tabSelected }: TabContentProps) => {
  const CONTENT_MAP: Record<TabsValues, ReactNode> = {
    description: <DescriptionTab description={modData.descripcion} />,
    features: <FeaturesTab features={modData.caracteristicas} />,
    installation: (
      <InstallStepsTab installSteps={modData.pasosInstalacion} />
    ),
  };
  return (
    <article className="bg-primary pt-4 pb-6 px-6 rounded-2xl border-1 border-primary-dark mt-6">
      {CONTENT_MAP[tabSelected]}
    </article>
  );
};
