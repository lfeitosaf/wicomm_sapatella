import AdImg from "../../assets/image 2.png";
import * as S from "./style";
import { useTheme } from "styled-components";
import Text from "../Text";

const MiddleAd = () => {
  const theme = useTheme();
  return (
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
      <img src={AdImg} />
    </S.MainDiv>
  );
};

export default MiddleAd;
