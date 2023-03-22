import styled, { css } from "styled-components";

interface PaginationNumber {
  active?: boolean;
  next?: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
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

export const ShowMore = styled.a`
  text-decoration: none;
  display: block;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors["purple-500"]};
  color: ${({ theme }) => theme.colors["purple-500"]};
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 1.2rem 0;
  border-radius: 4px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
`;

export const TotalProductsMobile = styled.span`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors["gray-300"]};
  font-size: 1.8rem;
  margin-top: 0.8rem;

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors["gray-900"]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
`;
