import styled from "styled-components";

interface ActionsQtdProps {
  active?: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 4rem 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  gap: 2rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 16.2rem;

  .info {
    width: 50rem;
  }
`;

export const BreadCrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.8rem;

  a {
    color: ${({ theme }) => theme.colors["purple-500"]};
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors["gray-300"]};
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors["gray-900"]};
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors["gray-300"]};
  margin-bottom: 4.8rem;

  img {
    height: 1.6rem;
    width: 1.6rem;
  }
`;

export const Price = styled.div`
  margin-bottom: 4.8rem;

  .patner {
    font-size: 4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors["purple-500"]};
    margin-bottom: 0.8rem;
  }

  .no-patner {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors["gray-300"]};
    text-transform: uppercase;
  }
`;

export const Comment = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors["gray-400"]};
  line-height: 2.1rem;
  margin-bottom: 4.8rem;

  .sommelier {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors["gray-900"]};
    font-weight: 700;
    margin-bottom: 0.8rem;
  }
`;

export const Buy = styled.div`
  display: flex;
  align-items: center;
  width: 32.8rem;
  background-color: ${({ theme }) => theme.colors["green-500"]};
  padding: 1.8rem 2.2rem;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors["white"]};

  div {
    display: flex;
    flex-direction: row;
    gap: 1.7rem;
    justify-content: center;
    align-items: center;

    .Qtd {
      font-size: 2.4rem;
      font-weight: bold;
    }
  }

  .diviser {
    content: " ";
    display: inline-block;
    width: 2px;
    height: 3.3rem;
    background-color: ${({ theme }) => theme.colors["half-white"]};
    margin-left: 2.2rem;
    margin-right: 4.4rem;
  }

  .addCart {
    font-size: 1.6rem;
    font-weight: 700;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors["white"]};
    cursor: pointer;
  }
`;

export const ActionsQtd = styled.button<ActionsQtdProps>`
  border-radius: 99999px;
  font-size: 2rem;
  font-weight: bold;
  background: none;
  border-color: ${({ theme }) => theme.colors["white"]};
  color: ${({ theme }) => theme.colors["white"]};
  border-style: solid;
  cursor: pointer;

  opacity: ${({ theme, active }) => (active ? 1 : 0.4)};

  &:first-child {
    width: 2.769rem;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
