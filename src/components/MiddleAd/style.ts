import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Mudei para 'relative' */
  width: fit-content;
  margin: 0 auto;
  overflow: visible;
`;

export const AdSection = styled.section`
  display: flex;
  justify-content: space-around;
  height: 64px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brand.white};
  width: 100%;
`;

export const AdTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.very_large};
  color: ${({ theme }) => theme.colors.brand.gray};
`;

export const SpanDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 5px;
`;

export const AdSpan = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.small};
  color: ${({ theme }) => theme.colors.brand.dark_pink};
`;

export const AdSecondTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.very_large};
  color: ${({ theme }) => theme.colors.brand.pink};
  font-weight: 700;
`;

export const AdButton = styled.button`
  background-color: ${({ theme }) => theme.colors.brand.pink};
  color: ${({ theme }) => theme.colors.brand.white};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 156px;
  height: 48px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
