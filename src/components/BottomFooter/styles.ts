import styled from "styled-components";

export const BottomFooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 148px;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.brand.gray};
`;

export const MainContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;
