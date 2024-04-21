import { useTheme } from "styled-components";
import Text from "../Text";
import imgSandalAd from "../../assets/Rectangle 79.png";
import Button from "../Button";
import * as S from "./styles";

const SandalOffer = () => {
  const theme = useTheme();

  return (
    <S.OfferSection>
      <S.TextDiv>
        <Text
          size={theme.typography.sizes.large}
          color={theme.colors.brand.gray}
          margin={"0px 0px 16px 0px"}
        >
          Pra brilhar no verão
        </Text>
        <Text
          size={theme.typography.sizes.tiny}
          color={theme.colors.brand.gray}
          margin={"0px 0px 32px 0px"}
        >
          As Sandálias Birkens são uma escolha de calçado atemporal e icônica,
          conhecida por seu conforto, qualidade e design diferenciado.
        </Text>
        <Button width={"156"} height={"48"}>
          {"É a minha cara"}
        </Button>
      </S.TextDiv>
      <img src={imgSandalAd}></img>
    </S.OfferSection>
  );
};

export default SandalOffer;
