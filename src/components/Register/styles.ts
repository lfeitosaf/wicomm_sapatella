import styled from "styled-components";

export const RegisterSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 148px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const TextSpan = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.large};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.brand.pink};
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;
`;

export const StyledInput = styled.input`
  width: 277px;
  height: 40px;
  padding-left: 12px;
  border: 1px solid ${({ theme }) => theme.colors.brand.gray};
  font-size: ${({ theme }) => theme.typography.sizes.small};
  color: ${({ theme }) => theme.colors.brand.gray};
  outline: none;
  ::selection {
    border: none;
  }
`;
