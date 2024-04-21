import * as S from "./styles";
import SearchGlass from "../../assets/search.png";

const SearchBar = () => {
  return (
    <S.SearchForm>
      <S.SearchInput placeholder="Buscar" />
      <S.SearchIcon src={SearchGlass} alt="Search Icon" margin="12px" />
    </S.SearchForm>
  );
};

export default SearchBar;
