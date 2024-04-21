import styled from "styled-components";
import Icon from "../Icon";

export const SearchForm = styled.form`
  height: 40px;
  width: 232px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.brand.white};
  background-color: rgba(211, 211, 211, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  margin-left: 12px;
  width: 170px;
  background-color: rgba(211, 211, 211, 0);
  color: ${({ theme }) => theme.colors.brand.white};
  font-size: 16px;
  height: 24px;
  outline: none;
  border: none;
`;

export const SearchIcon = styled(Icon)``;
