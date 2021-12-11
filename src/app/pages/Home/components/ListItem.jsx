import React from "react";
import PropTypes from "prop-types";

import {
  GridItem,
  ItemCard,
  ItemCardButton,
  ItemImage,
  ItemLink,
} from "./template";

const ListItem = (props) => {
  const { item } = props;

  return (
    <GridItem>
      <ItemLink to={`/detail/${item.id}`}>
        <ItemCard>
          <ItemImage src={item.imgUrl} />
          <ItemCardButton>View</ItemCardButton>
        </ItemCard>
      </ItemLink>
    </GridItem>
  );
};

ListItem.propTypes = {
  item: PropTypes.object,
};

export default ListItem;
