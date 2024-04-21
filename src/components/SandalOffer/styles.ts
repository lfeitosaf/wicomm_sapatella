import styled from "styled-components";
import Text from "../Text";

export const OfferSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 123px;
  margin-top: 153px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 273px;
`;

export const Rectangle = styled.div`
  height: 5px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.brand.pink};
  margin-bottom: 56px;
`;

export const StyledTitle = styled(Text)`
  margin-bottom: 16px;
`;
