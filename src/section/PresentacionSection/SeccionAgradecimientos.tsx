import { Youtube } from "@icons/Youtube";
import LogoCanal from "@assets/logo_canal.jpg";

export const SeccionAgradecimientos = () => {
  return (
    <div className="container">
      <h4>Palabras finales</h4>
      <p>
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
        className="youtube-channel"
      >
        <div className="img-container">
          <img className="channel-avatar" src={LogoCanal} alt="Logo del canal" />
        </div>
        <span>Seguime en mi canal de YouTube</span>
        <Youtube />
      </a>
    </div>
  );
};
