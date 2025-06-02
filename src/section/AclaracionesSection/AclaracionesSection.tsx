import { TitleContainer } from "@component/ui/TitleContainer";
import "./AclaracionesSection.css";
import Title from "@assets/img/definiciones_aclaraciones_title.webp";
import { ACLARACIONES } from "@data/aclaraciones";

export const AclaracionesSection = () => {
  return (
    <section className="aclaraciones-section">
      <TitleContainer alt="titulo seccion aclaraciones" imgSrc={Title} />
      <article className="aclaraciones-container">
        {ACLARACIONES.map((item, index) => (
          <article key={index} className="item-aclaracion">
            <img src={item.imgSrc} alt={`titulo sobre ${item.titulo}`} />
            <div className="content">
              <h2>{item.titulo}</h2>
              <p>{item.aclaracion}</p>
            </div>
          </article>
        ))}
      </article>
    </section>
  );
};
