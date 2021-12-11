import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectors } from "core/store";

import Breadcrumbs, { Breadcrumb } from "../Breadcrumbs";

const Header = () => {
  const breadcrumbs = useSelector(selectors.header.breadcrumbs);

  return (
    <Breadcrumbs>
      {breadcrumbs.map((breadcrumb) => (
        <Breadcrumb key={breadcrumb.label}>
          <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
        </Breadcrumb>
      ))}
    </Breadcrumbs>
  );
};

export default Header;
