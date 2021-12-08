import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { selectors } from "core/store";

import { useSearch } from "../hooks";

import ListItem from "./ListItem";
import { Grid } from "./template";

const List = () => {
  const { searchText } = useSearch();
  const { loading, error, items } = useSelector(selectors.storeItems.state);

  const itemsToDisplay = useMemo(() => {
    if (searchText === "") {
      return items;
    }

    return items.filter((item) =>
      [item.brand, item.model].some((property) => property.includes(searchText))
    );
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <>
        <h2>Error</h2>
        <p>An error occured. Reload the page or contact support.</p>
      </>
    );
  }

  if (itemsToDisplay.length === 0) {
    return <h2>No Results</h2>;
  }

  return (
    <Grid>
      {itemsToDisplay.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </Grid>
  );
};

export default List;
