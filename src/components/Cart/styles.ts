import styled from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  inset: 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
`;

export const Close = styled(Dialog.Close)`
  cursor: pointer;
`;

export const Content = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6px;
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 35rem;
  height: 100%;

  overflow-y: auto;
`;

export const Message = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors["gray-900"]};
  font-weight: 700;
  text-align: center;
`;

export const Title = styled(Dialog.Title)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors["gray-900"]};
`;

export const Products = styled.div`
  background-color: ${({ theme }) => theme.colors["gray-100"]};
  height: 40rem;
  overflow-y: auto;

  li {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors["gray-200"]};
  }
`;

export const Footer = styled.div`
  padding: 2rem;

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    .text {
      color: ${({ theme }) => theme.colors["gray-400"]};
      font-size: 2rem;
      font-weight: 700;
    }

    .value {
      font-size: 2.8rem;
      color: ${({ theme }) => theme.colors["purple-500"]};
    }
  }

  button {
    border: none;
    background-color: ${({ theme }) => theme.colors["green-500"]};
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors["white"]};
    text-align: center;
    width: 100%;
    height: 4.8rem;

    border-radius: 4px;
  }
`;
