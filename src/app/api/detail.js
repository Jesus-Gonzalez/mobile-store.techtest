import { createApiEndpoint } from "./base";

export const fetchItem = async (itemId) => {
  const response = await fetch(createApiEndpoint(`api/product/${itemId}`));
  return await response.json();
};
