
export const getModification = async (modId: string) => {
  try {
    const url = new URL(
      import.meta.env.VITE_API_URL + "/modifications" + `/${modId}`
    );
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
    const modification = await response.json();
    return modification;
  } catch (error) {
    throw new Error(`Error fetching modification: ${error}`);
  }
};
