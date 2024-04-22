import * as S from "./styles";
import logo from "../../assets/logo_SAPATELLA_preto 1.png";
import igLogo from "../../assets/InstagramLogo.png";
import wppLogo from "../../assets/WhatsappLogo.png";
import fbLogo from "../../assets/FacebookLogo.png";
import Text from "../Text";
import visa from "../../assets/visa.png";
import master from "../../assets/master.png";
import hipercard from "../../assets/hipercard.png";
import pix from "../../assets/pix2.png";
import amex from "../../assets/amex.png";
import elo from "../../assets/elo.png";
import boleto from "../../assets/boleto.png";
import security1 from "../../assets/security1.png";
import security2 from "../../assets/security2.png";
import { useTheme } from "styled-components";
import BottomFooter from "../BottomFooter";

const aboutUsArray = [
  { id: 1, description: "Quem somos" },
  { id: 2, description: "Mapas do site" },
  { id: 3, description: "Casas Sapatella" },
  { id: 4, description: "Mapas do site" },
  { id: 5, description: "Seja um parceiro" },
  { id: 6, description: "Seja um Franqueado" },
  { id: 7, description: "Trabalhe com a gente" },
];

const myAccountArray = [
  { id: 1, description: "Meus Dados" },
  { id: 2, description: "Meus Pedidos" },
  { id: 3, description: "Login" },
];
const supportArray = [
  { id: 1, description: "Trocas e Devoluções" },
  { id: 2, description: "Dúvidas Frequentes" },
  { id: 3, description: "Fale Conosco" },
  { id: 4, description: "Super Natal" },
];

const flagsArray = [
  { id: 1, src: visa },
  { id: 2, src: master },
  { id: 3, src: hipercard },
  { id: 4, src: pix },
  { id: 5, src: amex },
  { id: 6, src: elo },
  { id: 7, src: boleto },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <S.FooterSection>
      <S.MainContainer>
        <S.SecondaryContainer>
          <S.LogoDiv>
            <img src={logo} />
            <S.MiniLogosDiv>
              <img src={igLogo} />
              <img src={wppLogo} />
              <img src={fbLogo} />
            </S.MiniLogosDiv>
          </S.LogoDiv>
          <S.MenuFooter>
            <S.ColumnDiv>
              <Text color={theme.colors.brand.gray}>SOBRE NÓS</Text>
              {aboutUsArray.map((item) => (
                <S.MenuFooterItem key={item.id}>
                  {item.description}
                </S.MenuFooterItem>
              ))}
            </S.ColumnDiv>
            <S.ColumnDiv>
              <Text color={theme.colors.brand.gray}>MINHA CONTA</Text>
              {myAccountArray.map((item) => (
                <S.MenuFooterItem key={item.id}>
                  {item.description}
                </S.MenuFooterItem>
              ))}
            </S.ColumnDiv>
            <S.ColumnDiv>
              <Text color={theme.colors.brand.gray}>SUPORTE E POLÍTICAS</Text>
              {supportArray.map((item) => (
                <S.MenuFooterItem key={item.id}>
                  {item.description}
                </S.MenuFooterItem>
              ))}
            </S.ColumnDiv>
            <S.ColumnDiv>
              <Text color={theme.colors.brand.gray}>FORMAS DE PAGAMENTO</Text>
              <S.FlagsDiv>
                {flagsArray.map((item) => (
                  <S.FlagImg key={item.id} src={item.src} />
                ))}
              </S.FlagsDiv>
              <S.SecurityTitle>SEGURANÇA</S.SecurityTitle>
              <S.SecurityDiv>
                <img src={security1} />
                <img src={security2} />
              </S.SecurityDiv>
            </S.ColumnDiv>
          </S.MenuFooter>
        </S.SecondaryContainer>
      </S.MainContainer>
      <BottomFooter />
    </S.FooterSection>
  );
};

export default Footer;
