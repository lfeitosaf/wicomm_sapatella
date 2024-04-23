import { useTheme } from "styled-components";
import Icon from "../Icon";
import * as S from "./styles";
import truckIcon from "../../assets/truck.png";
import coupomIcon from "../../assets/offcoupom.png";
import pixIcon from "../../assets/pix.png";
import cardIcon from "../../assets/card.png";
import Text from "../Text";

const PromoCards = () => {
  const theme = useTheme();

  return (
    <S.Section>
      <S.Card>
        <Icon src={truckIcon} alt="Truck Icon" size={48} />
        <Text
          size={theme.typography.sizes.normal}
          color={theme.colors.brand.gray}
        >
          Frete Grátis p/ Sudeste
        </Text>
      </S.Card>
      <S.Card>
        <Icon src={coupomIcon} alt="Coupom Icon" size={48} />
        <Text
          size={theme.typography.sizes.normal}
          color={theme.colors.brand.gray}
        >
          R$ 20 off na 1ª compra
        </Text>
      </S.Card>
      <S.Card>
        <Icon src={pixIcon} alt="Pix Icon" size={48} />
        <Text
          size={theme.typography.sizes.normal}
          color={theme.colors.brand.gray}
        >
          Pague via PIX
        </Text>
      </S.Card>
      <S.Card>
        <Icon src={cardIcon} alt="Card Icon" size={48} />
        <Text
          size={theme.typography.sizes.normal}
          color={theme.colors.brand.gray}
        >
          Parcele em até 6x sem juros
        </Text>
      </S.Card>
    </S.Section>
  );
};

export default PromoCards;
