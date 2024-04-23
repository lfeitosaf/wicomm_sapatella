import Button from "../Button";
import Text from "../Text";
import * as S from "./styles";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";

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
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button width={"178"} height={"40"}>
              Cadastrar
            </Button>
          </motion.button>
        </S.InputDiv>
      </S.MainContainer>
    </S.RegisterSection>
  );
};

export default Register;
