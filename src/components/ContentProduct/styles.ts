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
  display: flex;

  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: auto;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "img  head"
    "img  price"
    "img  comment"
    "img  buy";

  .img {
    grid-area: img;
    margin-right: 16.2rem;
  }

  .info {
    width: 50rem;
    grid-area: head;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    row-gap: 6rem;

    .info {
      width: auto;
    }
    .img {
      width: auto;
      height: 33.3rem;
      margin-right: 0;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-areas:
      "head"
      "img"
      "comment"
      "buy";

    .info {
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .img {
      width: auto;
      height: 33.3rem;
      margin-right: 0;
      margin: 0 auto;

      img {
        height: 100%;
      }
    }
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
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 2rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors["gray-300"]};

  img {
    height: 1.6rem;
    width: 1.6rem;
  }
`;

export const Price = styled.div`
  grid-area: price;

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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
`;

export const Comment = styled.div`
  grid-area: comment;

  font-size: 1.4rem;

  color: ${({ theme }) => theme.colors["gray-400"]};
  line-height: 2.1rem;

  .sommelier {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors["gray-900"]};
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 1.5rem;
  }
`;

export const Buy = styled.div`
  grid-area: buy;

  display: flex;
  align-items: center;
  width: 32.8rem;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.colors["green-500"]};
  padding: 0rem 2.2rem;
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
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
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

export const PriceMobile = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors["white"]};
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.1);
  padding: 0px 16px;

  justify-content: space-between;
  align-items: center;

  .price-wrapper {
    margin-left: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .discount {
      background-color: ${({ theme }) => theme.colors["orange-500"]};
      font-size: 1rem;
      color: ${({ theme }) => theme.colors["white"]};
      font-weight: bold;
      padding: 0.5rem;
      width: fit-content;
      border-radius: 2px;
      margin-top: -15px;
    }

    .price {
      font-size: 1.2rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors["gray-500"]};
      text-decoration: line-through;
    }

    .discount-price {
      font-size: 2.4rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors["purple-500"]};
    }

    .not-patner {
      text-transform: uppercase;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors["gray-500"]};
    }
  }

  .button {
    margin-right: 1.6rem;
    width: 18rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: flex;
  }
`;
