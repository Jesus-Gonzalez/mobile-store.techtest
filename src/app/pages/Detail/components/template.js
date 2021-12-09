import styled from "styled-components";

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

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1rem;
  border: 1px solid black;
`;

export const DescriptionTitle = styled.h3`
  margin: 0;
  text-transform: uppercase;
`;

export const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Feature = styled.li`
  font-size: 12px;
`;
