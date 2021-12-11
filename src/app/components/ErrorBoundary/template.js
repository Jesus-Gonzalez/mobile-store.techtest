import styled from "styled-components";

export const Content = styled.h2`
  margin: 0;
  font-size: 16px;
`;

export const Breadcrumb = styled.span`
  padding: 0 0.5rem;
  border-right: 1px solid black;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    border-right: none;
  }
`;
