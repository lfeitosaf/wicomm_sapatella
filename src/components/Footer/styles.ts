import styled from "styled-components";

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 48px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
`;

export const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 127px;
`;

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const MiniLogosDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const MenuFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FlagsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 188px;
  gap: 8px;
`;

export const SecurityDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const FlagImg = styled.img`
  height: 24px;
  width: 34px;
`;

export const MenuFooterItem = styled.li`
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizes.small};
  color: ${({ theme }) => theme.colors.brand.gray};
`;

export const SecurityTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.normal};
  color: ${({ theme }) => theme.colors.brand.gray};
  margin-top: 34px;
`;
