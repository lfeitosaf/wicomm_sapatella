import styled from "styled-components";

export const CategoriesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 32px;
`;

export const CategoriesList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 36px;
`;

export const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 220px;
  width: 178px;
  gap: 14px;
`;
