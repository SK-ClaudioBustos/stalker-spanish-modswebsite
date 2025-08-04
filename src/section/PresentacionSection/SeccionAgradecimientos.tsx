import { Youtube } from "@icons/Youtube";
import LogoCanal from "@assets/logo_canal.webp";

export const SeccionAgradecimientos = () => {
  return (
    <div className="w-fit">
      <h4 className="text-center underline mb-2">Palabras finales</h4>
      <p className="w-auto max-w-[65ch] hyphens-auto text-justify text-pretty leading-[2.2ch]">
        Ahora si me despido dejando un agradecimiento enorme a todos los que
        componen esta recopilación, tanto modders como traductores y un
        agradecimiento especial a Shevi1140 que me ayuda con esta tarea. A ellos
        es quien deben agradecer y apoyar, ya que su trabajo, su tan valioso
        tiempo, ha salidos del corazón, sin pedir nada a cambio. Los verdaderos
        camaradas. ¡¡GRACIAS!!
      </p>
      <a
        href="https://www.youtube.com/@elgauchostalker"
        target="_blank"
        rel="noopener noreferrer"
        className="h-20 flex items-center justify-center rounded-[5px] gap-2 bg-primary mx-auto mt-5 mb-0"
      >
        <div className="max-w-16 min-w-8 w-[12vw] h-auto">
          <img className="rounded-full" src={LogoCanal} alt="Logo del canal" />
        </div>
        <span className="uppercase fluid-sm">Seguime en mi canal de YouTube</span>
        <Youtube className="max-w-16 min-w-8 w-[12vw] h-auto" />
      </a>
    </div>
  );
};
