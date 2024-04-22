import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  height: 370px;
  position: relative;
`;

export const DivHeader = styled.div`
  display: flex;
  height: 277px;
  width: 277px;
  margin-bottom: 12px;
  position: relative;
`;

export const DivBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DivPrice = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.brand.pink};
  color: ${({ theme }) => theme.colors.brand.white};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 277px;
  height: 32px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const SpanOff = styled.span`
  display: flex;
  position: absolute;
  text-align: center;
  width: 64px;
  height: 24px;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.brand.pink};
  color: ${({ theme }) => theme.colors.brand.white};
  font-size: ${({ theme }) => theme.typography.sizes.very_tiny};
  justify-content: center;
  align-items: center;
`;

export const HeartIcon = styled.img`
  display: flex;
  position: absolute;
  text-align: center;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  z-index: 2;
  color: ${({ theme }) => theme.colors.brand.white};
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
