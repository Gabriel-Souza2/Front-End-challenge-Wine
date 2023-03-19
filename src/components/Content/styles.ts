import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors["gray-100"]};
`;

export const Wrapper = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding-top: 4rem;

  font-size: 1.6rem;

  display: grid;
  grid-template-columns: 25rem 1fr;
`;
