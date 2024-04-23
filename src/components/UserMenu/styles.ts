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

export const StyledCartNumber = styled.div`
  position: relative;
  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${({ theme }) => theme.colors.brand.pink};
    color: white;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    font-size: ${({ theme }) => theme.typography.sizes.very_tiny};
  }
`;
