import { Youtube } from "@icons/Youtube";
import LogoCanal from "@assets/logo_canal.webp";

export const SeccionAgradecimientos = () => {
  return (
    <section className="flex flex-col w-fit px-8 py-4 rounded-lg bg-primary-dark">
      <h3 className="title-class">Palabras finales</h3>
      <p className="w-auto max-w-[65ch] hyphens-auto text-justify text-pretty leading-[2.2ch]">
        Ahora si me despido dejando un agradecimiento enorme a todos los que
        componen esta recopilación, tanto modders como traductores y un
        agradecimiento especial a Shevi1140 que me ayuda con esta tarea. A ellos
        es quien deben agradecer y apoyar, ya que su trabajo y su tan valioso
        tiempo han salido del corazón, sin pedir nada a cambio.
      </p>
      <a
        href="https://www.youtube.com/@elgauchostalker"
        target="_blank"
        rel="noopener noreferrer"
        className="self-center w-fit h-20 flex items-center justify-center gap-2 mt-5"
      >
        <Youtube className="max-w-16 min-w-8 w-[12vw] h-auto" />
        <span className="fluid-sm">
          SÍGUEME EN MI CANAL DE YOUTUBE
        </span>
      </a>
    </section>
  );
};
