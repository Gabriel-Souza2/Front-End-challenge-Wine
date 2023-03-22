import styled from "styled-components";

export const Container = styled.div`
  .total-products {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors["gray-700"]};
    margin-bottom: 2.4rem;
    span {
      font-weight: bold;
    }
  }
`;

export const ProductsList = styled.ul`
  display: flex;
  width: 25.6rem;
`;
