import { Modificacion } from "@tipos/mods";
import Portrait1 from "@soc/vanilla_mods/01/portada.webp";
import I1 from "@soc/vanilla_mods/01/1.webp";
import I2 from "@soc/vanilla_mods/01/2.webp";
import I3 from "@soc/vanilla_mods/01/3.webp";
import I4 from "@soc/vanilla_mods/01/4.webp";

export const SOC_VANILLA_MODS: Modificacion[] = [
  {
    autor: "Artistpavel, Argus, Trojanuch, Sergy172",
    traduccion: "Vanilla",
    titulo: "Shadow Of Chernobyl Complete mod 1.5",
    fecha_lanzamiento: "2009 - Ultima actualización  9/04/2025",
    sinopsis: `Eres rescatado luego de un accidente en los camiones de la muerte, tras 
               despertar has perdido la memoria y tu única pista es tu PDA con la misión de matar 
               a un tal Strelok. La búsqueda por recuperar la memoria y encontrar a Strelok te lleva 
               a recorrer la Zona de exclusión.`,
    descripcion: `Una de las modificaciones mas recomendadas si buscas rejugar la saga 
                  con un lavado de cara sin sufrir cambios significativos. Un mod totalmente grafico 
                  que añade una experiencia visualmente actualizada sin pedir muchos, siendo 
                  accesible para la mayoria de usuarios. Entre lo mas destacado se añade Iluminación 
                  natural, amplias vistas panorámicas, profundidad de campo, mapeo de paralaje, 
                  SSAO, Más de 900 archivos de texturas reelaborados, incluidos vehículos y conjuntos 
                  de armaduras con edición manual de relieve.`,
    caracteristicas: [
      "Mejoras en la transisión de Noche y Día.",
      "Distancia de dibujado y vistas ampliadas.",
      "Nuevo diseño de Luna en multifase.",
      "Recreación de objetos especiales.",
      "Iluminación de alto rango dinámico mejorada y efectos solares.",
      "Aumento de los ciclos meteorológicos y variedad climática.",
      "Superficies mojadas durante la lluvia.",
      "Mapa de constelaciones nocturnas de alta resolución.",
      "Animaciones de agua mejoradas.",
      "Texturas de alta resolución.",
      "Vegetación mejorada.",
      "Añade SSAO Mejorado.",
      "Agrega un sitema de particulas.",
      "Fuego dinámico.",
      "Mejoras en la I.A.",
      "Corrección de bugs.",
      "Mejoras en sonido.",
    ],
    enlaces: [
      {
        texto: "Tutorial",
        url: "https://www.youtube.com/watch?v=vZgvQkzbRFY",
      },
      {
        texto: "Pagina oficial",
        url: "https://www.moddb.com/mods/stalker-complete-2009",
      },
      {
        texto: "Complete Mod 1.5",
        url: "https://www.moddb.com/mods/stalker-complete-2009/downloads/stalker-complete-15",
      },
    ],
    portadaPath: Portrait1,
    imagenesGaleria: [I1, I2, I3, I4],
    aclaraciones: [
      "El mod requiere tener Shadow of Chernobyl ya que se toma el juego base para aplicar las mejoras.",
      "Se deja un tutorial del camrada OmegaKira  para instalarlo.",
    ],
  },
  // {
  //   autor: "",
  //   titulo: "",
  //   traduccion: "",
  //   fecha_lanzamiento: "",
  //   sinopsis: "",
  //   descripcion: "",
  //   caracteristicas: [],
  //   enlaces: [],
  //   portadaPath: "",
  //   imagenesGaleria: [],
  //   aclaraciones: [],
  //   pasosInstalacion: [],
  // },
];
