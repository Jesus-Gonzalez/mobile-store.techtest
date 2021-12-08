import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import { Content } from "./template";

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default DefaultLayout;
