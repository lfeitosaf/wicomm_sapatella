import * as S from "./styles";
import sneakerIcon from "../../assets/image 5.png";
import Text from "../Text";
import { useTheme } from "styled-components";

const ProductItem = () => {
  const theme = useTheme();

  return (
    <S.Card>
      <S.DivHeader>
        <S.SpanOff>30% OFF</S.SpanOff>
        <S.Image src={sneakerIcon} alt="sneakerIcon" />
        <S.Button>Adicionar à sacola</S.Button>
      </S.DivHeader>
      <S.DivBody>
        <Text
          size={theme.typography.sizes.tiny}
          color={theme.colors.brand.gray}
          margin={"0px 0px 22px 0px"}
        >
          Tênis Clean Urbano - Branco
        </Text>
        <S.DivPrice>
          <Text
            size={theme.typography.sizes.normal}
            color={theme.colors.brand.gray}
          >
            RS 169,90
          </Text>
          <Text
            size={theme.typography.sizes.small}
            color={theme.colors.brand.gray}
          >
            R$ 209,90
          </Text>
        </S.DivPrice>
        <Text
          size={theme.typography.sizes.tiny}
          color={theme.colors.brand.gray}
        >
          ou 6x de R$ 28,31 sem juros
        </Text>
      </S.DivBody>
    </S.Card>
  );
};

export default ProductItem;
