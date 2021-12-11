import { useDispatch, useSelector } from "react-redux";

import { selectors, setCartItemsCount } from "core/store";
import * as API from "app/api";
import { useProductOptions } from "./useProductOptions";

export const useAddToCart = () => {
  const dispatch = useDispatch();

  const { item } = useSelector(selectors.detail.state);
  const { selectedOptions } = useProductOptions();

  const handleClickAddToCart = async () => {
    const { id: itemId } = item;
    const {
      colors: { code: colorCode },
      storages: { code: storageCode },
    } = selectedOptions;
    try {
      const data = await API.cart.addItem({ itemId, colorCode, storageCode });
      if (!data?.count) {
        alert(
          "An error occurred while adding the item to the cart. Try again or contact support."
        );
        return;
      }
      dispatch(setCartItemsCount(data.count));
    } catch {
      alert(
        "An error occurred while adding the item to the cart. Try again or contact support."
      );
    }
  };

  return {
    handleClickAddToCart,
  };
};
