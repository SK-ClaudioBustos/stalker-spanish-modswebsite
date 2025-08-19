import { JuegoEnum, TipoMod } from "@tipos/mods";

export const getModifications = async (juego: JuegoEnum, tipo: TipoMod) => {
  try {
    const queryParams = {
      juego: juego.toString(),
      tipo: tipo.toString(),
    };
    const url = new URL(import.meta.env.VITE_API_URL + "/modifications");
    url.search = new URLSearchParams(queryParams).toString();

    const request = new Request(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`Error fetching modifications: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching modifications: ${error}`);
  }
};
