import React from "react";
import PropTypes from "prop-types";

import { Content } from "./template";

const Breadcrumbs = (props) => {
  const { children } = props;

  return <Content>{children}</Content>;
};

Breadcrumbs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Breadcrumbs;
