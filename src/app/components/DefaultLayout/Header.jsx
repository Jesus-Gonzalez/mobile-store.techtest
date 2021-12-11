import React from "react";

import CartCount from "./CartCount";
import HeaderBreadcrumbs from "./HeaderBreadcrumbs";
import { HeaderComponent, HeaderRow, Title, TitleLink } from "./template";

const Header = () => {
  return (
    <HeaderComponent>
      <HeaderRow>
        <TitleLink to="/">
          <Title>Mobile Store</Title>
        </TitleLink>
        <CartCount />
      </HeaderRow>
      <HeaderRow>
        <HeaderBreadcrumbs />
      </HeaderRow>
    </HeaderComponent>
  );
};

export default Header;
