import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors["green-500"]};
  height: 4.4rem;

  width: 100%;
  font-size: 1.6rem;
  font-weight: 700;
  border: none;
  color: ${({ theme }) => theme.colors["white"]};
  cursor: pointer;

  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AlertRoot = styled(AlertDialog.Root)``;

export const AlertTrigger = styled(AlertDialog.Trigger)``;

export const AlertPortal = styled(AlertDialog.Portal)``;

export const AlertContent = styled(AlertDialog.Content)`
  background-color: ${({ theme }) => theme.colors["green-500"]};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 30rem;
  height: 4rem;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const AlertDescription = styled(AlertDialog.Description)`
  color: ${({ theme }) => theme.colors["white"]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;

  .product-add {
    font-weight: 700;
    font-size: 1.8rem;
  }

  .product {
    font-weight: bold;
    font-size: 1.6rem;
  }
`;
