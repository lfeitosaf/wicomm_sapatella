import styled from "styled-components";

export const AboutUsSection = styled.section`
  width: 100%;
  height: 484px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 970px;
  align-items: center;
  gap: 133px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.small};
  color: ${({ theme }) => theme.colors.brand.gray};
  line-height: 20px;
`;
