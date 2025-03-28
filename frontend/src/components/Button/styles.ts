import { Button } from "@mui/material";
import styled, { css } from "styled-components";

type ButtonSize = "2rem" | "1rem" | string;

export const ButtonS = styled(Button)<{
  PaddingButton?: ButtonSize;
  variant?: "text" | "contained" | "outlined";
  size?: string;
  family?: string;
  weight?: string;
}>`
  && {
    padding: ${({ PaddingButton }) =>
      PaddingButton ? PaddingButton : "1rem 2rem"};
    border-radius: 8px;
    font-size: 1rem;
    /* font-weight: 400; */
    ${({ weight }) =>
      css`
        font-weight: ${weight ? weight : 600};
      `}
    line-height: 20px;
    text-transform: none;
    display: flex;
    gap: 10px;
    flex-shrink: 1;
    ${({ variant }) =>
      variant === "contained" &&
      css`
        background-color: #1e325f;
        color: white;

        &:hover {
          background-color: #121e39;
        }

        &:disabled {
          background-color: #bfbfbf;
        }
      `}

    ${({ variant }) =>
      variant === "outlined" &&
      css`
        border: 1px solid #1e325f;
        color: #1e325f;

        &:hover {
          background-color: #ffffff;
          color: #1e325f;
        }

        &:disabled {
          border: 2px solid #bfbfbf;
          color: #bfbfbf;
        }
      `}

    ${({ variant }) =>
      variant === "text" &&
      css`
        background-color: transparent;
        color: #1e325f;

        &:hover {
          background-color: #f0f0f0;
        }

        &:disabled {
          color: #bfbfbf;
        }
      `}

    ${({ size }) =>
      size &&
      css`
        width: ${size};
      `}
      font-family: "Avenir", sans-serif !important;
  }
`;
