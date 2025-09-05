import { TitleContainer } from "@component/ui/TitleContainer";
import Title from "/img/definiciones_aclaraciones_title.webp";
import { ACLARACIONES } from "@data/aclaraciones";

export const AclaracionesSection = () => {
  return (
    <section className="my-5 mx-auto max-w-[800px]">
      <TitleContainer alt="titulo seccion aclaraciones" imgSrc={Title} />
      <div className="mt-8 flex flex-col items-center gap-8">
        {ACLARACIONES.map((item, index) => (
          <article
            key={index}
            className="w-11/12 rounded-2xl bg-primary-light py-8 relative"
          >
            <img
              src={item.imgSrc}
              loading="lazy"
              fetchPriority="low"
              decoding="async"
              alt={`titulo sobre ${item.titulo}`}
              className="w-full"
            />
            <div className="mds:mb-8 p-4 z-10 bottom-0 md:absolute bg-linear-to-t from-primary to-transparent rounded-b-2xl">
              <h2 className="font-semibold underline">{item.titulo}</h2>
              <p className="font-light text-justify">{item.aclaracion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
