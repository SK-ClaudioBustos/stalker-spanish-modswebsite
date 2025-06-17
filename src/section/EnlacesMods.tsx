import { GAMES } from "@data/games.ts";
import { TitleContainer } from "@component/ui/TitleContainer";
import Title from "@assets/img/seleccione_un_juego_title.webp";
import { Link } from "@tanstack/react-router";

export const EnlacesMods = () => {
  return (
    <section>
      <TitleContainer alt="titulo seccion indice" imgSrc={Title} />
      <div className="my-8 mx-0 flex flex-row flex-wrap gap-8 justify-center">
        {GAMES.map((item) => (
          <Link
            to={item.url}
            rel="noopener noreferrer"
            key={item.year}
            className="w-72 aspect-3/4 cursor-pointer"
          >
            <img
              className="size-full"
              src={item.imgPath}
              alt={`imagen de ${item.title}`}
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
