import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .product-wrapper {
    background-color: ${({ theme }) => theme.colors["white"]};
    padding: 1rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1.6rem;
  }

  .title {
    height: 4rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
    p {
      text-align: center;
      margin-top: 0.8rem;
      font-size: 1.6rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors["gray-800"]};
    }
  }

  .discount {
    margin-top: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
  }

  .old-price {
    font-size: 1.1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors["gray-300"]};
    text-decoration: line-through;
  }

  .total-discount {
    font-size: 1rem;
    display: block;
    background-color: ${({ theme }) => theme.colors["orange-500"]};
    color: ${({ theme }) => theme.colors["white"]};
    padding: 0.3rem;
    font-weight: bold;
    border-radius: 2px;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .price-wrapper {
    margin-top: 1.6rem;
    text-align: center;

    .partner {
      font-size: 1.1rem;
      font-weight: bold;
      margin-right: 0.8rem;
    }

    .price {
      color: ${({ theme }) => theme.colors["purple-500"]};
      font-weight: bold;
      font-size: 1.3rem;

      .symbol {
        font-size: 1.1rem;
        margin-right: 0.4rem;
      }

      .integer {
        font-size: 2.3rem;
      }
    }
  }

  .not-partner {
    text-align: center;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors["gray-300"]};
    margin-top: 0.6rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    .product-wrapper p {
      font-size: 1.4rem;
    }
  }
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors["green-500"]};
  color: ${({ theme }) => theme.colors["white"]};
  border: none;
  width: 100%;
  padding: 1.2rem;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
`;
