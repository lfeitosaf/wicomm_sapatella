import { useTheme } from "styled-components";
import * as S from "./styles";
import Text from "../Text";

const Menu = () => {
  const theme = useTheme();
  return (
    <S.MenuList>
      <S.ItemList>
        <Text
          size={theme.typography.sizes.normal}
          color={theme.colors.brand.white}
        >
          Novidades
        </Text>
      </S.ItemList>
      <S.ItemList>
        <Text
          size={theme.typography.sizes.normal}
          color={theme.colors.brand.white}
        >
          Sapatos
        </Text>
      </S.ItemList>
      <S.ItemList>
        <Text
          size={theme.typography.sizes.normal}
          color={theme.colors.brand.white}
        >
          Sandálias
        </Text>
      </S.ItemList>
      <S.ItemList>
        <Text
          size={theme.typography.sizes.normal}
          color={theme.colors.brand.white}
        >
          Tênis
        </Text>
      </S.ItemList>
      <S.ItemList>
        <Text
          size={theme.typography.sizes.normal}
          color={theme.colors.brand.white}
        >
          Bolsas & Acessórios
        </Text>
      </S.ItemList>
      <S.ItemList>
        <Text
          size={theme.typography.sizes.normal}
          color={theme.colors.brand.white}
        >
          OFF
        </Text>
      </S.ItemList>
    </S.MenuList>
  );
};

export default Menu;
