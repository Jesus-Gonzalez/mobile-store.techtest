import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { fetchDetail, setBreadcrumbs, selectors } from "core/store";

export const useDetail = () => {
  const dispatch = useDispatch();
  const { error, loading, item } = useSelector(selectors.detail.state);

  const { itemId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!itemId) {
      navigate("/");
    }
    dispatch(fetchDetail(itemId));
  }, []);

  useEffect(() => {
    if (!item) return;
    dispatch(
      setBreadcrumbs([
        { to: "/", label: "Home" },
        { to: location.pathname, label: `Device: ${item.brand} ${item.model}` },
      ])
    );
  }, [item]);

  return { error, loading, item };
};
