import * as cartSelectors from "./cart";

describe("core.store.selectors.cart", () => {
  const state = {
    cart: {
      count: 2,
    },
  };

  it("should return count", () => {
    const count = cartSelectors.count(state);
    expect(count).toBe(2);
  });
});
