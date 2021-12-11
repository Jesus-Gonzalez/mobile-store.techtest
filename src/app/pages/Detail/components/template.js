import styled, { css } from "styled-components";

export const ProductWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2.5rem;
`;

export const Product = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  width: 1000px;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-of-type {
    align-items: flex-end;
    @media (max-width: 1000px) {
      align-items: center;
    }
  }
`;

export const ItemImage = styled.img`
  width: 10rem;
  height: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 0.33rem;
  max-width: 300px;
  min-width: 300px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Feature = styled.li`
  font-size: 12px;
`;

export const ProductOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
`;

export const ProductOptionList = styled(List)`
  display: flex;
  flex-direction: row;
  margin-top: 0.25rem;
`;

export const ProductOption = styled.li`
  margin-right: 0.125rem;
  cursor: pointer;
  padding: 0.25rem;
  border: 1px solid #999;
  border-radius: 0.25rem;

  &:last-of-type {
    margin-right: 0;
  }

  ${(props) =>
    props.selected &&
    css`
      color: #eee;
      background: #666;
      border: 1px solid #999;
    `}
`;

export const ProductOptionLabel = styled.span`
  font-weight: bold;
`;

export const AddToCartButton = styled.button`
  cursor: pointer;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  background: darkseagreen;
  border: 1px solid green;
  border-radius: 0.33rem;
`;
