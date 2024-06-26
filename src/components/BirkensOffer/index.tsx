import Text from "../Text";
import { useTheme } from "styled-components";
import arrowImg from "../../assets/arrow-right-alt.png";
import filledArrowImg from "../../assets/filledarrow.png";
import img1 from "../../assets/image 16.png";
import img2 from "../../assets/image 12.png";
import img3 from "../../assets/image 14.png";
import { motion } from "framer-motion";

import * as S from "./styles";

const BirkensOffer = () => {
  const theme = useTheme();

  return (
    <S.BirkensSection>
      <S.firstColumn>
        <S.textsDiv>
          <Text
            size={theme.typography.sizes.large}
            color={theme.colors.brand.gray}
          >
            Rasteiras & Birkens
          </Text>
          <S.birkensDesc>
            A categoria de Sandália Rasteira da Sapatella é um verdadeiro
            paraíso para os amantes de conforto e estilo.
          </S.birkensDesc>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <S.birkensDiv>
              <Text
                size={theme.typography.sizes.normal}
                color={theme.colors.brand.gray}
              >
                Eu quero
              </Text>
              <img src={arrowImg} />
            </S.birkensDiv>
          </motion.div>
        </S.textsDiv>
        <img src={img1} />
      </S.firstColumn>
      <S.secondColumn>
        <img src={img2} />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <S.sandalsDiv>
            <Text
              size={theme.typography.sizes.normal}
              color={theme.colors.brand.gray}
            >
              Sandálias
            </Text>
            <img src={arrowImg} />
          </S.sandalsDiv>
        </motion.div>
      </S.secondColumn>
      <S.thirdColumn>
        <img src={img3} />
        <S.sneakersDiv>
          <Text
            size={theme.typography.sizes.large}
            color={theme.colors.brand.gray}
          >
            Tênis
          </Text>
          <S.sneakersDesc>
            Os tênis femininos se tornaram um item básico na moda e nos calçados
            do dia a dia.
          </S.sneakersDesc>
        </S.sneakersDiv>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <S.checkDiv>
            <Text
              size={theme.typography.sizes.normal}
              color={theme.colors.brand.gray}
            >
              Conferir
            </Text>
            <S.styledArrow src={filledArrowImg} />
          </S.checkDiv>
        </motion.div>
      </S.thirdColumn>
    </S.BirkensSection>
  );
};

export default BirkensOffer;
