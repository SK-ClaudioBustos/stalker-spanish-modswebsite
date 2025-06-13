import { Modificacion } from "@tipos/mods";

import Portrait4 from "@soc/historia/04/portada.webp";
import I04_1 from "@soc/historia/04/1.webp";
import I04_2 from "@soc/historia/04/2.webp";
import I04_3 from "@soc/historia/04/3.webp";
import I04_4 from "@soc/historia/04/4.webp";

import Portrait5 from "@soc/historia/05/portada.webp";
import I05_1 from "@soc/historia/05/1.webp";
import I05_2 from "@soc/historia/05/2.webp";
import I05_3 from "@soc/historia/05/3.webp";
import I05_4 from "@soc/historia/05/4.webp";

import Portrait6 from "@soc/historia/06/portada.webp";
import I06_1 from "@soc/historia/06/1.webp";
import I06_2 from "@soc/historia/06/2.webp";
import I06_3 from "@soc/historia/06/3.webp";
import I06_4 from "@soc/historia/06/4.webp";

import Portrait7 from "@soc/historia/07/portada.webp";
import I07_1 from "@soc/historia/07/1.webp";
import I07_2 from "@soc/historia/07/2.webp";
import I07_3 from "@soc/historia/07/3.webp";
import I07_4 from "@soc/historia/07/4.webp";

import Portrait8 from "@soc/historia/08/portada.webp";
import I08_1 from "@soc/historia/08/1.webp";
import I08_2 from "@soc/historia/08/2.webp";
import I08_3 from "@soc/historia/08/3.webp";
import I08_4 from "@soc/historia/08/4.webp";

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
        seguridad" y borra el archivo llamado "talk_16.xml" que está en la carpeta "ui".`,
    ],
    isStandalone: true,
  },
  {
    portadaPath: Portrait5,
    imagenesGaleria: [I05_1, I05_2, I05_3, I05_4],
    autor: "dez0wave",
    titulo: "priboi Story",
    traduccion: "STALKERHispano",
    fecha_lanzamiento: "2008",
    sinopsis: `Un año después de la historia de Marcado. El teniente militar Priboi Slipchenko, es 
    enviado a la Zona... Una organización secreta, llamada UHSF, fue responsable del incidente 
    del '86. Tenían una base en Dead City pero los mercenarios los aniquilaron a finales de los 
    80. La organización se vino abajo y los últimos miembros vivos desaparecieron hasta hoy.
    Más de 20 documentos clasificados importantes estaban escondidos en la zona y necesitará 
    encontrarlos para completar el rompecabezas.`,
    descripcion: `este Mod puede presentar varios bugs, su trama es interesante y se le suman  
    muchas  adiciones nuevas  al  gameplay,  desde  personajes, vehículos e  ítems que resultan 
    en una experiencia que se siente nueva sin perder su base en lo clásico ya que es un mod que 
    nace en el año 2008 de los creadores de Lost Alpha.`,
    caracteristicas: [
      "Añadido un ENB personal.",
      "Estadísticas de artefactos ajustadas.",
      "Equilibrio de efectos y estadísticas de objetos.",
      "Modificación de algo de música para mayor inmersión.",
      "Se reelaboraron las texturas de la interfaz del inventario de artefactos para una versión adaptada.",
    ],
    enlaces: [
      {
        texto:
          "https://drive.google.com/file/d/1GiK0gJeyibKmtYASrRObzAwgnHtE3y5x/view?fbclid=IwAR3wLPq‐8pthy9_FGk5uqUrp3HPMwrlFPnX1VjUjgGrmVzrr1B7pCCVTEco",
        url: "Enlace de descarga",
      },
    ],
    aclaraciones: [
      `Aclaración Importante: deben tener cuidado con los códigos de las puertas que aparecen en la pda del juego ya que no son todos correctos, en 
      la carpeta del mod esta un pdf con la guía, hay que buscarlos ahí ya que eso es un arma de doble filo porque algunos códigos abren puertas que 
      todavia no tenian que abrir y rompen la historia.`,
    ],
    isStandalone: true,
  },
  {
    portadaPath: Portrait6,
    imagenesGaleria: [I06_1, I06_2, I06_3, I06_4],
    autor: "Zaurus & Crew",
    titulo: "APOCALIPSIS",
    traduccion: "Cacho Ale",
    fecha_lanzamiento: "04/04/2011",
    sinopsis: `Luego de los acontecimientos de Shadow of Chernobyl, Strelok vuelve al 
    Cordón para al fin marcharse de la Zona, pero al llegar se encuentra con la noticia 
    de que han perdió contacto con Yantar, el curioso evento nos pone en la misión de 
    averiguar qué ocurre desembocando en una aventura cargada de misterios. `,
    descripcion: `Es un mod de campaña bastante líneal y llevadero. Es el primero de la 
    trilogía Apocalipsis de los desarrolladores Zaurus & Crew, seguido de S.T.A.L.K.E.R. ‐ Search ‐ DIES IRAE y  S.T.A.L.K.E.R. ‐ Duty ‐ Philosophy of War.`,
    caracteristicas: [
      "Estable y con buen rendimiento.",
      "Los enemigos respawnean rápido.",
      "Los cadáveres se acumulan y no desaparecen.",
      "Nuevos artefactos.",
      "Nuevas Armas.",
    ],
    enlaces: [
      {
        texto: "Enlace de descarga",
        url: "https://drive.google.com/file/d/1W8wY30DyM2hyp2T3bWpjuENCKVqXyVF_/view?fbclid=IwAR1b8k1C4ykK1BL4Cdz E96ZDsAJls‐KTz0k0qiMcH_ab_4lSX5oda1i0LK8",
      },
    ],
    isStandalone: true,
  },
  {
    portadaPath: Portrait7,
    imagenesGaleria: [I07_1, I07_2, I07_3, I07_4],
    autor: "Zaurus & Crew",
    titulo: "S.T.A.L.K.E.R. search dies irae",
    traduccion: "Cachoale",
    fecha_lanzamiento: "2011",
    sinopsis: `Durante el otoño de 2012, la radio de un grupo de búsqueda se estropea y a los  
    muchachos les quedan pocos suministros. Slaven, un ex soldado francotirador de la Infantería 
    Naval de Ucrania, decide ir solo a la planta de energía y echar un vistazo. Durante su expedición 
    por la central eléctrica suceden cosas extrañas que despertarán su interés.`,
    descripcion: `Este excelente mod es parte de los 5 mods desarrollados por Zaurus & Crew y 
    están conectados parcialmente entre sí por algunos personajes de Apocalypse, Duty: 
    Philosophy Of War, Fallen Star ‐ Mercenary's Honor, The Last Stalker.`,
    caracteristicas: [
      "Los requerimientos son los mismos que en Shadow of Chernobyl.",
      "La dificultad se puede catalogar como media.",
      "La configuración se guarda en la misma carpeta del mod, para no crear conflictos con otros mods instalados o con el propio SOC.",
      "Addons adaptados por Kamtek que mejoran gráficos y el aspecto técnico",
    ],
    enlaces: [
      {
        texto: "Enlace de descarga",
        url: "https://www.mediafire.com/file/740ktmcsht1qtxl/Dies_Irae_Spanish_Standalone_Repack.7z/file",
      },
    ],
    isStandalone: true,
  },
  {
    portadaPath: Portrait8,
    imagenesGaleria: [I08_1, I08_2, I08_3, I08_4],
    autor: "Zaurus & Crew",
    titulo: "S.T.A.L.K.E.R. DUTY: THE PHOLOSOPHY OF WAR",
    traduccion: "Kamtek",
    fecha_lanzamiento: "2012",
    sinopsis: `Nos centramos en el deber de los soldados y su papel en la guerra. La historia se desarrolla en una nueva 
    área del juego, donde los jugadores asumen el papel de un miembro del grupo militar Duty, que debe luchar contra 
    enemigos y tomar decisiones difíciles mientras se enfrenta a las consecuencias de sus acciones.`,
    descripcion:`El mod es el tercero de la saga de mods que inician con Apocalipsis de Zaurus' Crew, presenta nuevas 
    misiones y objetivos, así como armas, armaduras y equipos adicionales. Además, los jugadores deben equilibrar su 
    relación con otros personajes, lo que puede afectar la forma en que otros personajes interactúan con ellos en el 
    futuro. A esta edición se le ha integrado un pack de armas, se han corregido Bugs, se adaptó a la última versión de 
    Shadow of Chernobyl para brindar más estabilidad y adicional a ello se agregaron modelos HD para que trabajen 
    con este Mod.`,
    caracteristicas: [
      'Mapas de Call of Pripyat trasladados a Shadow of Chernobyl.',
      'Añade mejoras gráficas.',
      'Agrega texturas de alta resolución.',
      'Nuevos modelos de armas.',
      'Animaciones mejoradas.',
      'Añade nuevos ítems.'
    ],
    enlaces: [
      {
        texto: 'Enlace de descarga',
        url: 'https://drive.google.com/drive/folders/1J6wbAHBWw2JOiczt-FwKeJMP_M_CGTKZ?fbclid=IwAR1lIJrjWHhJGEmkqVmom1b1-A84pCNqAnQNN5GSxvHslOXzmaBeZNnlk5Y'
      }
    ],
    aclaraciones: [
      `Repack realizado por Ramon Retamar, por lo que no necesitas ams que descargar y descomprimir.
       Los savegames y la configuración se guardan en la misma carpeta del mod, para no crear conflictos con los 3 
       juegos o con otros mods.`
    ],
    isStandalone: false
  },
  // {
  //   portadaPath: "",
  //   imagenesGaleria: [],
  //   autor: "",
  //   titulo: "",
  //   traduccion: "",
  //   fecha_lanzamiento: "",
  //   sinopsis: ``,
  //   descripcion: ``,
  //   caracteristicas: [],
  //   enlaces: [],
  //   aclaraciones: [],
  //   pasosInstalacion: [],
  //   isStandalone: false
  // },
];
