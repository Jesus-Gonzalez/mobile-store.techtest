import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { GridItem } from "./template";

const ListItem = (props) => {
  const { item } = props;

  return (
    <GridItem>
      <Link to={`/detail/${item.id}`}>
        <img src={item.imgUrl} />
      </Link>
    </GridItem>
  );
};

ListItem.propTypes = {
  item: PropTypes.object,
};

export default ListItem;
