import styled from "styled-components";

interface FooterIconProps {
  active: boolean;
}

export const DivFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const PinkFooter = styled.span`
  height: 8px;
  width: 16px;
  background-color: ${({ theme }) => theme.colors.brand.pink};
  cursor: pointer;
`;

export const GrayFooter = styled.span`
  height: 8px;
  width: 8px;
  background-color: ${({ theme }) => theme.colors.brand.white};
  cursor: pointer;
`;

export const FooterIcon = styled.span<FooterIconProps>`
  height: 8px;
  width: 16px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.brand.pink : theme.colors.brand.white};
  cursor: pointer;
`;
