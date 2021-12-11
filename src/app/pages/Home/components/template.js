import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const Grid = styled.ul`
  max-width: 1160px;
  width: 1160px;
  flex-wrap: wrap;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1160px) {
    width: 100%;
  }
`;

export const GridItem = styled.li`
  flex: 1 0 21%;
  padding: 0.125rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  border: 1px solid #aaa;
  border-radius: 0.25rem;
`;

export const ItemImage = styled.img`
  width: 140px;
  height: 185px;
`;

export const ItemCardButton = styled.button`
  cursor: pointer;
  padding: 1rem 0.5rem;
  margin-top: 0.25rem;
  text-transform: uppercase;
  color: darkolivegreen;
  background: lightgreen;
  border: 1px solid darkolivegreen;
  border-radius: 0.25rem;
`;

export const SearchInput = styled.input.attrs({ type: "search" })`
  align-self: flex-end;
  padding: 0.5rem 0.25rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;

  &:focus {
    outline: none;
  }
`;
