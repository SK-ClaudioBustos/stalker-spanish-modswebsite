import { PresentacionPaginaWeb } from "./PresentacionPaginaWeb";
import { SeccionAgradecimientos } from "./SeccionAgradecimientos";
import { SeccionGrupos } from "./SeccionGrupos";
import "./PresentacionSection.css";
import { TitleContainer } from "@component/ui/TitleContainer";

export const PresentacionSection = () => {
  return (
    <section className="bienvenidos-section">
      <TitleContainer alt="titulo de la pagina web" imgSrc="./title.webp" />
      <div className="primary-content">
        <PresentacionPaginaWeb />
        <SeccionGrupos />
        <SeccionAgradecimientos />
      </div>
    </section>
  );
};
