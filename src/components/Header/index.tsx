import Logo from "../Logo";
import Menu from "../Menu";
import UserMenu from "../UserMenu";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Dashboard>
      <Logo />
      <Menu />
      <UserMenu />
    </S.Dashboard>
  );
};

export default Header;
