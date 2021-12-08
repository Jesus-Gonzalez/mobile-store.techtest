import React from "react";

import CartCount from "./CartCount";
import { HeaderComponent } from "./template";

const Header = () => {
  return (
    <HeaderComponent>
      <h1>Mobile Store</h1>
      <CartCount />
    </HeaderComponent>
  );
};

export default Header;
