import * as cartActions from "./cart";

describe("core.store.actions.cart", () => {
  const mockStorage = {};

  beforeAll(() => {
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      mockStorage[key] = value;
    });
  });

  it("should set cart item count to store", () => {
    const action = cartActions.setCartItemsCountToStore(1);
    expect(action.type).toBe(cartActions.SET_CART_ITEM_COUNT);
    expect(action.payload).toBe(1);
  });

  it("should set sessionStorage and call to store mutation action", () => {
    const thunk = cartActions.setCartItemsCount(1);
    const action = cartActions.setCartItemsCountToStore(1);
    const dispatch = jest.fn();
    thunk(dispatch);
    expect(dispatch).toHaveBeenCalledWith(action);
    expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(global.Storage.prototype.setItem).toHaveBeenCalledWith(
      "mobile-store.cart.count",
      1
    );
  });

  afterAll(() => {
    global.Storage.prototype.setItem.mockReset();
  });
});
