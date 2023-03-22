import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3.2rem;
  }

  .by-price {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors["gray-600"]};
    margin-bottom: 1.6rem;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked ~ div {
    border-color: ${({ theme }) => theme.colors["purple-500"]};

    .checked {
      opacity: 1;
      transform: scale(1);
    }
  }

  input[type="radio"]:hover ~ div {
    border-color: ${({ theme }) => theme.colors["purple-500"]};
    opacity: 0.5;

    .checked {
      transform: scale(100%);
      opacity: 0.5;
    }
  }

  label {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.8rem;
    cursor: pointer;
  }
`;

export const CustomRadio = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 999px;

  border: 2px solid ${({ theme }) => theme.colors["gray-300"]};

  display: flex;
  justify-content: center;
  align-items: center;

  .checked {
    width: 1rem;
    height: 1rem;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.colors["purple-500"]};
    transform: scale(0);
    opacity: 0;
    transition: all 0.2s ease-in;
  }
`;
