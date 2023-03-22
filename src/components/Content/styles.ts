import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors["gray-100"]};
  font-family: "Lato", sans-serif;
`;

export const Wrapper = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 4rem 0;

  font-size: 1.6rem;

  display: grid;
  grid-template-columns: 25rem 1fr;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 4rem 1.6rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
