import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const AdSection = styled.section`
  display: flex;
  justify-content: space-around;
  height: 64px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brand.white};
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
