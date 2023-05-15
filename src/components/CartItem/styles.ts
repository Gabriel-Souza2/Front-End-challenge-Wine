import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1.6rem;
  gap: 1rem;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .name {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors["gray-600"]};
      line-height: 1.2rem;
      font-weight: 400;
    }

    .price {
      color: ${({ theme }) => theme.colors["purple-500"]};
      font-weight: 600;
      font-size: 1.4rem;

      .price-currency {
        margin-right: 0.25rem;
      }

      .price-integer {
        font-size: 2rem;
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 6rem;
  padding: 0.8rem 0;
  border: 1px solid ${({ theme }) => theme.colors["gray-400"]};
  border-radius: 4px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors["gray-300"]};
  }

  span {
    font-size: 1.2rem;
  }
`;
