import { createApiEndpoint } from "./base";

export const fetchItems = async () => {
  const response = await fetch(createApiEndpoint("api/product"));
  return await response.json();
};
