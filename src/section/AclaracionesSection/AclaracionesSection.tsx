import { TitleContainer } from "@component/ui/TitleContainer";
import "./AclaracionesSection.css";

const ACLARACIONES = [
  {
    imgSrc: "background_1.jpg",
    titulo: "Vanilla + MOD",
    aclaracion:
      "Estos mods no alteran la historia en absoluto, sólo mejoran la mecánica de juego y tal vez los efectos visuales. Ideal para los que llevan mucho tiempo sin rejugar la saga y buscan una experiencia diferente.",
  },
  {
    imgSrc: "background_2.webp",
    titulo: "MODS de Historia",
    aclaracion:
      "Mods que buscan alterar la historia de uno de los juegos o escribir la suya propia, simplemente un mod impulsado por la historia. Ideal para los que buscan experiencias frescas dentro del universo Stalker. En este apartado se desprenden grandes sagas y excelentes historias.",
  },
  {
    imgSrc: "background_3.jpg",
    titulo: "MODS Freeplays",
    aclaracion:
      "Mods sin historia, sandbox centrados en el gameplay y la guerra de facciones. Estos suelen ser los mas populares en la comunidad (llegando a fragmentarla). De todas formas es ideal para los que solo buscan la experiencia de sobrevivir en la Zona y crear su propia historia.",
  },
];

export const AclaracionesSection = () => {
  return (
    <section className="aclaraciones-section">
      <TitleContainer
        alt="titulo seccion aclaraciones"
        imgSrc="./src/assets/img/definiciones_aclaraciones_title.png"
      />
      <div className="aclaraciones-container">
        {ACLARACIONES.map((item, index) => (
          <article key={index} className="item-aclaracion">
            <img
              src={`./src/assets/backgrounds/${item.imgSrc}`}
              alt={`titulo sobre ${item.titulo}`}
            />
            <div className="content">
              <h2>{item.titulo}</h2>
              <p>{item.aclaracion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
