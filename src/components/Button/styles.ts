import styled from "styled-components";

interface PinkButtonProps {
  width: string;
  height: string;
}

export const PinkButton = styled.button<PinkButtonProps>`
  background-color: ${({ theme }) => theme.colors.brand.pink};
  color: ${({ theme }) => theme.colors.brand.white};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: ${({ width }) => (width ? width + "px" : "auto")};
  height: ${({ height }) => (height ? height + "px" : "auto")};
  :hover {
    background-color: ${({ theme }) => theme.colors.brand.dark_pink};
  }
`;
