import { GAMES } from "@data/games.ts";
import "./EnlacesMods.css";
import { TitleContainer } from "@component/ui/TitleContainer";
import Title from "@assets/img/seleccione_un_juego_title.webp";

export const EnlacesMods = () => {
  return (
    <section>
      <TitleContainer alt="titulo seccion indice" imgSrc={Title} />
      <div className="indice">
        {GAMES.map((item) => (
          <a
            href={item.url}
            rel="noopener noreferrer"
            key={item.year}
            className="indice-item"
          >
            <img
              src={item.imgPath}
              alt={`imagen de ${item.title}`}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
};
