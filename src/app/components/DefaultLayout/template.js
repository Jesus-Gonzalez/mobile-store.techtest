import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: lightyellow;
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: goldenrod;
`;

export const Content = styled.div``;

export const CartCountComponent = styled.div``;
