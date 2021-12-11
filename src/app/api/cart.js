import { createApiEndpoint } from "./base";

export const addItem = async ({ itemId, colorCode, storageCode }) => {
  const response = await fetch(createApiEndpoint(`api/cart`), {
    method: "post",
    body: JSON.stringify({
      id: itemId,
      colorCode,
      storageCode,
    }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
