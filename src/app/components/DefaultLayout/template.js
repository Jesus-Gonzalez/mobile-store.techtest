import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderComponent = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 1px solid darkgrey;
  background: #eee;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.h1`
  font-size: 16px;
`;

export const Content = styled.div``;

export const CartCountComponent = styled.div``;
