import styled, { css } from "styled-components";

interface PaginationNumber {
  active?: boolean;
  next?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export const PaginationNumber = styled.a<PaginationNumber>`
  display: inline-block;
  text-decoration: none;
  padding: 1rem 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors["purple-500"]};
  color: ${({ theme }) => theme.colors["purple-500"]};
  border-radius: 3px;

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors["purple-500"]};
      color: ${({ theme }) => theme.colors["white"]};
    `}

  ${({ next }) =>
    next &&
    css`
      padding: 1rem 3.2rem;
    `}
`;

export const PaginationText = styled.a`
  color: ${({ theme }) => theme.colors["purple-500"]};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: capitalize;
`;
