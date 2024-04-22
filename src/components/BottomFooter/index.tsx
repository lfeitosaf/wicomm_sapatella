import Text from "../Text/index.tsx";
import * as S from "./styles.ts";
import { useTheme } from "styled-components";
import wicommLogo from "../../assets/Logo_Wicomm_WhiteBlue 1.png";
import vtexLogo from "../../assets/VTEX_pink_RGB.png";

const BottomFooter = () => {
  const theme = useTheme();

  return (
    <S.BottomFooterContainer>
      <S.MainContainer>
        <S.TextDiv>
          <Text
            size={theme.typography.sizes.small}
            color={theme.colors.brand.gray}
          >
            Somos Sonho LTA - Estrada do Campo D'areia, 182 - Pechincha - Rio de
            Janeiro/RJ - CEP: 22.743-310
          </Text>
          <Text
            size={theme.typography.sizes.small}
            color={theme.colors.brand.gray}
          >
            CNPJ:28.445.729/0081-75 | © 2024 Todos dos direitos reservados
          </Text>
        </S.TextDiv>
        <S.LogoDiv>
          <img src={wicommLogo} />
          <img src={vtexLogo} />
        </S.LogoDiv>
      </S.MainContainer>
    </S.BottomFooterContainer>
  );
};

export default BottomFooter;
