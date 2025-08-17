import { TABS } from "@data/tabs";
import { Modificacion } from "@tipos/mods";
import { TabsValues } from "@tipos/tabs";
import { useState } from "react";
import { TabContent } from "./TabContent";

export const InformationTabs = ({ modData }: { modData: Modificacion }) => {
  const [tabSelected, setTabSelected] = useState<TabsValues>("description");

  const handleTabChange = (value: string) => {
    const tabSelected = value as TabsValues;
    setTabSelected(tabSelected);
  };

  return (
    <div className="w-full">
      <nav className="lg:col-span-2 grid w-full grid-cols-3 bg-primary-dark rounded-lg p-2">
        {TABS.map((tab) => (
          <button
            data-state={tabSelected === tab.value ? "active" : "inactive"}
            onClick={() => handleTabChange(tab.value)}
            key={tab.value}
            className="data-[state=active]:bg-primary-light data-[state=active]:text-white rounded-lg py-1.5 px-3 text-sm"
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <TabContent
        modData={modData}
        tabSelected={tabSelected}
      />
    </div>
  );
};
