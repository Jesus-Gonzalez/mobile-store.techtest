import React from "react";
import { useSelector } from "react-redux";

import { selectors } from "core/store";

import ListItem from "./ListItem";
import { Grid } from "./template";

const List = () => {
  const { loading, error, items } = useSelector(selectors.storeItems.state);

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

  return (
    <Grid>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </Grid>
  );
};

export default List;
