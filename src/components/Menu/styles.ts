import styled, { ThemeConsumer } from "styled-components";
import Link from "next/link";

interface ActiveLink {
  active: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 8.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["gray-200"]};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
`;

export const Content = styled.div`
  max-width: 112rem;
  height: 100%;
  margin: 0 auto;

  display: grid;

  grid-template-columns: auto 1fr auto;
  grid-template-rows: 100%;

  align-items: center;
`;

export const Nav = styled.nav`
  margin-left: 8rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors["gray-400"]};
  height: 100%;

  ul {
    display: flex;
    height: 100%;
  }
`;

export const MenuItem = styled.li<ActiveLink>`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 4.8rem;
  position: relative;

  a {
    text-decoration: none;
    color: ${({ active, theme }) =>
      active ? theme.colors["purple-500"] : theme.colors["gray-400"]};

    &:hover {
      color: ${({ theme }) => theme.colors["purple-500"]};
    }
  }

  &::after {
    content: " ";
    width: 100%;
    height: 4px;
    background-color: ${({ active, theme }) =>
      active ? theme.colors["purple-500"] : theme.colors["white"]};

    position: absolute;
    bottom: 0;
  }

  &:hover {
    &::after {
      background-color: ${({ theme }) => theme.colors["purple-500"]};
    }
  }
`;

export const Actions = styled.div`
  justify-self: flex-end;
  display: flex;
  align-items: center;
  gap: 4.5rem;
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 99999px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors["gray-100"]};
  }
`;
