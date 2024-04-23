import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const ItemList = styled.li`
  display: inline-block;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.brand.white};
`;
