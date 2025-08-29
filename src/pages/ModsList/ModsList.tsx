import { ModsGrid } from "@pages/ModsList/ModsGrid/ModsGrid";
import { HeaderModsList } from "./HeaderModsList/HeaderModsList";

export const ModsList = () => {
  return (
    <section className="mt-4 flex flex-col gap-y-15">
      <HeaderModsList />
      <ModsGrid />
    </section>
  );
};
