import { nanoquery } from "@nanostores/query";

// Create fetcher store for pool details
const [createPoolDetailsStore] = nanoquery({
  fetcher: async (chain: string, id: string) => {
    const response = await fetch(
      `http://localhost:8080/api/getObjects/${chain}`,
      {
        method: "POST",
        body: JSON.stringify([id]),
      }
    );

    if (!response || !response.ok) {
      console.log(`Failed to fetch pool details`);
      return;
    }

    let poolDetailsJSON;
    try {
      poolDetailsJSON = await response.json();
    } catch (e) {
      console.log({ e, response });
      return;
    }

    if (!poolDetailsJSON || !poolDetailsJSON.result) {
      console.log("Failed to fetch pool data");
      return;
    }

    if (
      poolDetailsJSON &&
      poolDetailsJSON.result &&
      poolDetailsJSON.result.length
    ) {
      console.log(`Fetched pool details`);
      return poolDetailsJSON.result[0];
    }
  },
});

export { createPoolDetailsStore };