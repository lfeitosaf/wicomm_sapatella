import Icon from "../Icon";
import SearchBar from "../SearchBar";
import * as S from "./styles";
import userIcon from "../../assets/user.png";
import heartIcon from "../../assets/heart.png";
import cartIcon from "../../assets/shopping-cart.png";

const UserMenu = ({ cartCount }: any) => {
  return (
    <S.MenuList>
      <SearchBar />
      <Icon src={userIcon} alt="User Icon" />
      <Icon src={heartIcon} alt="Heart Icon" />
      <S.StyledCartNumber>
        {cartCount === 0 ? <></> : <span>{cartCount}</span>}
        <Icon src={cartIcon} alt="Cart Icon" />
      </S.StyledCartNumber>
    </S.MenuList>
  );
};
export default UserMenu;
