import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

export const ItemList = styled.li`
  display: inline-block;
  color: ${({ theme }) => theme.colors.brand.white};
  margin-right: 24px;
`;
