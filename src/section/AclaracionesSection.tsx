import { TitleContainer } from "@component/ui/TitleContainer";
import "./AclaracionesSection.css";
import Title from "@assets/img/definiciones_aclaraciones_title.webp";
import { ACLARACIONES } from "@data/aclaraciones";

export const AclaracionesSection = () => {
  return (
    <section className="my-5 mx-auto max-w-[800px]">
      <TitleContainer alt="titulo seccion aclaraciones" imgSrc={Title} />
      <div className="mt-8 flex flex-col items-center gap-8">
        {ACLARACIONES.map((item, index) => (
          <article key={index} className="w-10/12 relative">
            <img className="w-full" src={item.imgSrc} alt={`titulo sobre ${item.titulo}`} />
            <div className="sm:bg-gray-700/60 bg-gray-700 p-3.5 z-10 bottom-0 static sm:absolute">
              <h2>{item.titulo}</h2>
              <p>{item.aclaracion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
