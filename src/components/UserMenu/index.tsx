import Icon from "../Icon";
import SearchBar from "../SearchBar";
import * as S from "./styles";
import userIcon from "../../assets/user.png";
import heartIcon from "../../assets/heart.png";
import cartIcon from "../../assets/shopping-cart.png";

const UserMenu = () => {
  return (
    <S.MenuList>
      <SearchBar />
      <Icon src={userIcon} alt="User Icon" />
      <Icon src={heartIcon} alt="User Icon" />
      <Icon src={cartIcon} alt="User Icon" />
    </S.MenuList>
  );
};

export default UserMenu;
