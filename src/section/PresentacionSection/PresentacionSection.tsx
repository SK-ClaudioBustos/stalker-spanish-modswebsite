import { PresentacionPaginaWeb } from "./PresentacionPaginaWeb";
import { SeccionAgradecimientos } from "./SeccionAgradecimientos";
import { SeccionGrupos } from "./SeccionGrupos";
import "./PresentacionSection.css";

export const PresentacionSection = () => {
  return (
    <section className="bienvenidos-section">
      <div className="title-container">
        <img src={"./title.webp"} alt="Titulo de la pagina web" />
      </div>
      <div className="primary-content">
        <PresentacionPaginaWeb />
        <SeccionGrupos />
        <SeccionAgradecimientos />
      </div>
    </section>
  );
};
