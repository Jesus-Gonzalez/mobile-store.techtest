import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchStoreItems } from "core/store";

export const useHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStoreItems());
  }, []);
};
