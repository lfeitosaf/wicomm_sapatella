import * as S from "./styles";
import SearchGlass from "../../assets/search.png";
import Icon from "../Icon";

const SearchBar = () => {
  return (
    <S.SearchForm>
      <S.SearchInput placeholder="Buscar" />
      <Icon src={SearchGlass} alt="Search Icon" margin="12px" />
    </S.SearchForm>
  );
};

export default SearchBar;
