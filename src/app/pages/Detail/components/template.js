import styled, { css } from "styled-components";

export const Product = styled.section`
  display: flex;
  justify-content: center;
  padding: 2.5rem;
`;

export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;

  &:first-of-type {
    justify-content: flex-end;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1rem;
  border: 1px solid black;
`;

export const CardTitle = styled.h3`
  margin: 0;
  text-transform: uppercase;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Feature = styled.li`
  font-size: 12px;
`;

export const ProductOptionList = styled(List)`
  display: flex;
  flex-direction: row;
`;

export const ProductOption = styled.li`
  margin-right: 0.125rem;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid red;
    `}
`;
