import Logo from "../Logo";
import Menu from "../Menu";
import UserMenu from "../UserMenu";
import * as S from "./styles";

const Header = ({ cartCount }: any) => {
  return (
    <S.Dashboard>
      <Logo />
      <Menu />
      <UserMenu cartCount={cartCount} />
    </S.Dashboard>
  );
};

export default Header;
