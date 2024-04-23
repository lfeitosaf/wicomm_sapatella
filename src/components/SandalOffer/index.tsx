import { useTheme } from "styled-components";
import Text from "../Text";
import imgSandalAd from "../../assets/Rectangle 79.png";
import Button from "../Button";
import * as S from "./styles";
import { motion } from "framer-motion";

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
          <motion.div whileHover={{ scale: 1.2 }}>
            {"É a minha cara"}
          </motion.div>
        </Button>
      </S.TextDiv>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <img src={imgSandalAd}></img>
      </motion.div>
    </S.OfferSection>
  );
};

export default SandalOffer;
