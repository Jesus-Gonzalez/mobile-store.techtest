import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { fetchDetail, selectors } from "core/store";

export const useDetail = () => {
  const dispatch = useDispatch();
  const { error, loading, item } = useSelector(selectors.detail.state);

  const { itemId } = useParams();
  const navigate = useNavigate();

  if (!itemId) {
    navigate("/");
  }

  useEffect(() => {
    dispatch(fetchDetail(itemId));
  }, []);

  return { error, loading, item };
};
