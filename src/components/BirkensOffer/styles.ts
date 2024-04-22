import styled from "styled-components";

export const BirkensSection = styled.section`
  display: flex;
  height: 598px;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

export const firstColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  width: 376px;
  margin-bottom: 102px;
`;
export const textsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 228px;
  gap: 8px;
  margin-top: 40px;
`;

export const birkensDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  max-width: 228px;
`;

export const birkensDesc = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.tiny};
  color: ${({ theme }) => theme.colors.brand.gray};
  line-height: 15.62px;
`;

export const secondColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 376px;
  margin-top: 40px;
  gap: 26px;
`;

export const sandalsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const thirdColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 376px;
  align-items: center;
  gap: 24px;
  margin-top: 40px;
`;

export const sneakersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  gap: 8px;
  align-items: center;
`;

export const checkDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  margin-top: 5px;
  line-height: 48px;
`;

export const sneakersDesc = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-indent: 15px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.brand.gray};
`;

export const styledArrow = styled.img`
  height: 12px;
  width: 16px;
`;
