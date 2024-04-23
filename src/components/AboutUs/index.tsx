import img from "../../assets/image 53.png";
import Text from "../Text";
import * as S from "./styles";
import { motion } from "framer-motion";
import { useTheme } from "styled-components";

const AboutUs = () => {
  const theme = useTheme();

  return (
    <S.AboutUsSection>
      <S.MainContainer>
        <S.TextDiv>
          <Text
            size={theme.typography.sizes.very_large}
            color={theme.colors.brand.gray}
          >
            Sobre a Sapatella
          </Text>
          <S.StyledText>
            Oi, a gente já se conhece? Muito prazer, Sapatella! Somos uma Marca
            de moda que oferece sapatos e acessórios feitos para te encantar.
            Aqui tem atenção de verdade, produtos com o seu jeito e ritmo. Chega
            mais, fique à vontade. Queremos ver você confortável e livre para
            ser como quiser e ocupar o espaço que bem entender. O que nos une e
            contagia é a vontade de brilhar e ser feliz. Mais que mulheres,
            somos amigas. Sapatella. Vamos juntas?
          </S.StyledText>
        </S.TextDiv>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src={img} />
        </motion.div>
      </S.MainContainer>
    </S.AboutUsSection>
  );
};
export default AboutUs;
