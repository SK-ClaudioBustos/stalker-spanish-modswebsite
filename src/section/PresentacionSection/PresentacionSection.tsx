import { PresentacionPaginaWeb } from "./PresentacionPaginaWeb";
import { SeccionAgradecimientos } from "./SeccionAgradecimientos";
import { SeccionGrupos } from "./SeccionGrupos";
import { TitleContainer } from "@component/ui/TitleContainer";

export const PresentacionSection = () => {
  return (
    <section>
      <TitleContainer alt="titulo de la pagina web" imgSrc="./title.webp" />
      <div className="max-w-3xl flex flex-col items-center gap-10 mx-auto my-12 py-8 px-[5vw] bg-primary/90">
        <PresentacionPaginaWeb />
        <SeccionGrupos />
        <SeccionAgradecimientos />
      </div>
    </section>
  );
};
