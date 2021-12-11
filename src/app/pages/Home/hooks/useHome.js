import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchStoreItems, setBreadcrumbs } from "core/store";

export const useHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStoreItems());
    dispatch(setBreadcrumbs([{ to: "/", label: "Home" }]));
  }, []);
};
