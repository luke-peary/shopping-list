import styled from "styled-components";

export const Header = styled.div`
  text-align: center;

  sa-heading {
    display: block;
    margin: 24px 0 16px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  sa-button {
    display: inline-block;
    & + sa-button {
      margin-left: 24px;
    }
  }
`;

export const List = styled.div`
  sa-product-tile + sa-product-tile {
    display: block;
    margin-top: 2.4rem;
  }
`;

export const Item = styled.div`
  border: 1px solid grey;
`;
