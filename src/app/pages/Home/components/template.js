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
  width: 10rem;
  max-width: 10rem;
  padding: 2rem 1rem;
  border: 1px solid #aaa;
  border-radius: 0.25rem;
`;

export const ItemImage = styled.img`
  width: 10rem;
  height: 13rem;
`;

export const ItemLabel = styled.span`
  margin-top: 0.5rem;
  color: black;
`;

export const ItemCardButton = styled.button`
  cursor: pointer;
  padding: 1rem 0.5rem;
  margin-top: 0.5rem;
  text-transform: uppercase;
  color: darkolivegreen;
  background: lightgreen;
  border: 1px solid darkolivegreen;
  border-radius: 0.25rem;
`;

export const SearchInput = styled.input.attrs({ type: "search" })`
  align-self: flex-end;
  width: 20rem;
  padding: 0.5rem 0.25rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;

  &:focus {
    outline: none;
  }
`;
