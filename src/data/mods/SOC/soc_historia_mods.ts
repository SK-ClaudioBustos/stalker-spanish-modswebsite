import { Modificacion } from "@tipos/mods";
import Portrait4 from "@soc/historia/04/portada.webp";
import I04_1 from "@soc/historia/04/1.webp";
import I04_2 from "@soc/historia/04/2.webp";
import I04_3 from "@soc/historia/04/3.webp";
import I04_4 from "@soc/historia/04/4.webp";

export const SOC_HISTORIA_MODS: Modificacion[] = [
  {
    portadaPath: Portrait4,
    imagenesGaleria: [I04_1, I04_2, I04_3, I04_4],
    autor: "Balhash Brothers Team",
    titulo: "28/12/2007",
    traduccion: "samael229683",
    fecha_lanzamiento: "28/12/2007",
    sinopsis: `14 de abril de 2006. Después de una explosión en el territorio de la Central Nuclear 
        de Chernóbil, el equipo Delta aterriza en la zona afectada para investigar las causas de este 
        acontecimiento, pero el primer día se pierde la comunicación con ellos y el cuartel general 
        decide enviar a los equipos Alfa y Beta para buscarlos. Un explorador llamado Strelok 
        también fue enviado a la Zona. Durante la operación de búsqueda, "Beta" sufre una 
        emboscada y "Alpha" desaparece sin dejar rastro. El protagonista se enfrenta a una tarea 
        difícil: encontrar "Alfa", llegar a tiempo para ayudar a "Beta" y resolver el misterio del 
        equipo "Delta".`,
    descripcion: `Este mod está realizado bajo la base de SOC pero remasterizado en el motor 
        OGSR, segun el autor se busco trasladar la sensacion de Doom 3 por lo que casi no hay npc, 
        salvo en el bar, se considera un mod dificil, ya que enfrentaras ordas de mutantes, pero 
        tendras hasta la posibilidad de transportarte en vehiculo y usarlo como arma.`,
    caracteristicas: [
      "Historia totalmente nueva",
      "Amplia variedad de Zombies.",
      "Actualizado al motor OGSR.",
      "Paquete de Armas añadido.",
      "Se añadió Stalker Two-K",
      "Gran variedad de mutantes.",
    ],
    enlaces: [
      {
        texto: "Parte 1",
        url: "https://www.moddb.com/mods/stalker-zona-de-derrota-ogsr-repack-espaol-by-samael229683/downloads/stalker-zona-de-derrota-ogsr-repack-espaol-parte-1",
      },
      {
        texto: "Parte 2",
        url: "https://www.moddb.com/mods/stalker-zona-de-derrota-ogsr-repack-espaol-by-samael229683/downloads/stalker-zona-de-derrota-ogsr-repack-espaol-parte-2",
      },
      {
        texto: "Parte 3",
        url: "https://www.moddb.com/mods/stalker-zona-de-derrota-ogsr-repack-espaol-by-samael229683/downloads/stalker-zona-de-derrota-ogsr-repack-espaol-parte-3",
      },
    ],
    aclaraciones: [
        'El mod es Standalone, por lo que no necesitas nada más para ejecutarlo.',
        `Importante: una vez instalado, para que el juego funcione correctamente, es 
         necesario crear un acceso directo del ejecutable "xrEngine.exe", que se 
         encuentra en la carpeta raíz del juego llamada "bin_x64" y después agregar el 
         parámetro: (-steam) sin paréntesis, a la ruta de destino del acceso directo`,
        `Nota del traductor: En carpeta raíz del juego llamada "IMPORTANTE", 
        encontrarán programas extra e indicaciones para el funcionamiento  del mod.
        Se tradujo la gran mayoría de objetos, artefactos, armas y diálogos del juego, 
        encontrarás algun que otro detalle en ruso, pero no arruinará la experiencia.`,
        `No desperdicies las balas de plata, las necesitarás para pasar el mod y son 
         muy escasas.`,
        `Esta versión ya cuenta con parche de corrección así que no requiere agregarle 
        nada más.`,
        `Se agregó un parche "opcional" para aumentar el tamaño de la fuente de los 
        diálogos del juego, lo podrás encontrar dentro de la carpeta "Importante". Para 
        revertir los cambios solo copia el contenido de la carpeta llamada "copia de 
        seguridad" y borra el archivo llamado "talk_16.xml" que está en la carpeta "ui".`
    ],
  },
  // {
  //   autor: "",
  //   titulo: "",
  //   traduccion: "",
  //   fecha_lanzamiento: "",
  //   sinopsis: ``,
  //   descripcion: ``,
  //   caracteristicas: [],
  //   enlaces: [],
  //   portadaPath: "",
  //   imagenesGaleria: [],
  //   aclaraciones: [],
  //   pasosInstalacion: [],
  // },
];
