import styled from "styled-components";

interface ActiveLink {
  active: boolean;
}

interface MobileMenu {
  openMobileMenu: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 8.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["gray-200"]};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: 112rem;
  height: 100%;
  margin: 0 auto;

  display: grid;

  grid-template-columns: auto 1fr auto;
  grid-template-rows: 100%;

  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    & {
      padding: 0 1.6rem;
    }
  }
`;

export const Nav = styled.nav<MobileMenu>`
  margin-left: 8rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors["gray-400"]};
  height: 100%;

  ul {
    display: flex;
    gap: 4.8rem;
    height: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    & {
      display: block;
      position: absolute;
      top: 0;
      left: 0;

      overflow-y: auto;
      height: 100vh;
      width: 40%;
      margin-left: ${({ openMobileMenu }) => (openMobileMenu ? "0" : "-40%")};
      transition: margin-left 0.5s linear;
      background-color: ${({ theme }) => theme.colors["gray-100"]};

      ul {
        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
        gap: 0;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 90%;
    margin-left: ${({ openMobileMenu }) => (openMobileMenu ? "0" : "-90%")};
  }
`;

export const AccountAccess = styled.div<MobileMenu>`
  display: none;
  align-items: center;
  padding: 2.4rem;
  gap: 1.6rem;

  font-size: 1.6rem;

  background-color: ${({ theme }) => theme.colors["white"]};
  margin-bottom: 1rem;

  div {
    p {
      margin-bottom: 0.8rem;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors["purple-500"]};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

  border: none;
  background: transparent;
`;

export const HambugerMenu = styled.button`
  border: none;
  background: transparent;
  display: block;
  margin-right: 2.8rem;
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    & {
      display: block;
    }
  }
`;

export const Overlay = styled.div<MobileMenu>`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: ${({ openMobileMenu }) => (openMobileMenu ? "block" : "none")};
`;

export const MenuItem = styled.li<ActiveLink>`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  font-family: "Neo Sans Std", sans-serif;

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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    color: ${({ theme }) => theme.colors["purple-500"]};
    border-top: 1px solid ${({ theme }) => theme.colors["gray-150"]};
    padding: 2.4rem;
    height: auto;

    &::after {
      display: none;
    }
  }
`;

export const Actions = styled.div`
  justify-self: flex-end;
  display: flex;
  align-items: center;
  gap: 4.5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    & {
      gap: 2.5rem;
    }
  }
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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    &:nth-child(2) {
      display: none;
    }
  }
`;
