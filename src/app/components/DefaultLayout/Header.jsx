import React from "react";

import CartCount from "./CartCount";
import { HeaderComponent, Title, TitleLink } from "./template";

const Header = () => {
  return (
    <HeaderComponent>
      <TitleLink to="/">
        <Title>Mobile Store</Title>
      </TitleLink>
      <CartCount />
    </HeaderComponent>
  );
};

export default Header;
