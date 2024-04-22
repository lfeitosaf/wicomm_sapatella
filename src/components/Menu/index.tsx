import { useTheme } from "styled-components";
import * as S from "./styles";
import TextButton from "../TextButton";

interface Menu {
  id: number;
  title: string;
}

const MenuArray: Menu[] = [
  { id: 1, title: "Novidades" },
  { id: 2, title: "Sapatos" },
  { id: 3, title: "Sandálias" },
  { id: 4, title: "Tênis" },
  { id: 5, title: "Bolsas & Acessórios" },
  { id: 6, title: "OFF" },
];

const Menu = () => {
  const theme = useTheme();
  return (
    <S.MenuList>
      {MenuArray.map((item) => (
        <S.ItemList key={item.id}>
          <TextButton color={theme.colors.brand.white}>{item.title}</TextButton>
        </S.ItemList>
      ))}
    </S.MenuList>
  );
};

export default Menu;
