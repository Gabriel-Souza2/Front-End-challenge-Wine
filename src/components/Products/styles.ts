import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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
  width: 100%;
  display: flex;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 3.2rem;

  margin-bottom: 3rem;

  li {
    width: 25.6rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    li {
      width: 23rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    li {
      width: 18rem;
    }
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.extraSmall}) {
    li {
      width: 15.6rem;
    }
  }
`;
