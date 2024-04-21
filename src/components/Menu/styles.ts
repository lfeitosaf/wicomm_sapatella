import styled from "styled-components";

export const MenuList = styled.ul``;

export const ItemList = styled.li`
  display: inline-block;
  color: ${({ theme }) => theme.colors.brand.white};
  font-size: ${({ theme }) => theme.typography.sizes.normal};
  margin-right: 24px;
`;
