import { SET_CART_ITEM_COUNT } from "../actions";
import cartReducer from "./cart";

describe("core.store.reducers.cart", () => {
  it("should return initial state on first call", () => {
    const state = cartReducer(undefined, { type: undefined });
    expect(state).toMatchInlineSnapshot(`
      Object {
        "count": 0,
      }
    `);
  });

  it("should increase count", () => {
    const state = cartReducer(undefined, { type: undefined });
    expect(state.count).toBe(0);
    const nextState = cartReducer(state, {
      type: SET_CART_ITEM_COUNT,
      payload: 1,
    });
    expect(nextState.count).toBe(1);
  });
});
