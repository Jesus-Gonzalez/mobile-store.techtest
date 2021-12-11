import React from "react";
import PropTypes from "prop-types";

import {
  GridItem,
  ItemCard,
  ItemCardButton,
  ItemImage,
  ItemLabel,
  ItemLink,
} from "./template";

const ListItem = (props) => {
  const { item } = props;

  return (
    <GridItem>
      <ItemLink to={`/detail/${item.id}`}>
        <ItemCard>
          <ItemImage src={item.imgUrl} />
          <ItemLabel>
            {item.brand} {item.model}
          </ItemLabel>
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
