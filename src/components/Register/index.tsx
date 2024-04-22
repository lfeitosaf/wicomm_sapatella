import Button from "../Button";
import Text from "../Text";
import * as S from "./styles";
import { useTheme } from "styled-components";

const Register = () => {
  const theme = useTheme();
  return (
    <S.RegisterSection>
      <S.MainContainer>
        <S.TextDiv>
          <Text
            size={theme.typography.sizes.large}
            color={theme.colors.brand.gray}
          >
            Cadastre-se e ganhe
          </Text>
          <S.TextSpan>R$ OFF</S.TextSpan>{" "}
          <Text
            size={theme.typography.sizes.large}
            color={theme.colors.brand.gray}
          >
            na sua primeira compra!
          </Text>
        </S.TextDiv>
        <S.InputDiv>
          <S.StyledInput placeholder="Nome" />
          <S.StyledInput placeholder="E-mail" />
          <Button width={"178"} height={"40"}>
            Cadastrar
          </Button>
        </S.InputDiv>
      </S.MainContainer>
    </S.RegisterSection>
  );
};

export default Register;
