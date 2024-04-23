import * as S from "./style";
import { useTheme } from "styled-components";
import Text from "../Text";
import { motion } from "framer-motion";
import { ImageProps } from "./imageprops.types";

const MiddleAd = ({ image }: ImageProps) => {
  const theme = useTheme();
  return (
    <S.MainContainer>
      <S.MainDiv>
        <S.AdSection>
          <S.AdTitle>
            <Text
              size={theme.typography.sizes.very_large}
              color={theme.colors.brand.gray}
            >
              #SuperBazar
            </Text>
          </S.AdTitle>
          <S.SpanDiv>
            <S.AdSpan>
              <Text
                size={theme.typography.sizes.small}
                color={theme.colors.brand.dark_pink}
              >
                até
              </Text>
            </S.AdSpan>
            <S.AdSecondTitle>
              <Text
                size={theme.typography.sizes.very_large}
                color={theme.colors.brand.pink}
              >
                50% OFF
              </Text>
            </S.AdSecondTitle>
          </S.SpanDiv>
        </S.AdSection>
        <img src={image.src} />
        <motion.div whileHover={{ scale: 1.2 }}>
          <S.AdButton>
            <Text
              size={theme.typography.sizes.normal}
              color={theme.colors.brand.white}
            >
              Conferir
            </Text>
          </S.AdButton>
        </motion.div>
      </S.MainDiv>
    </S.MainContainer>
  );
};

export default MiddleAd;
