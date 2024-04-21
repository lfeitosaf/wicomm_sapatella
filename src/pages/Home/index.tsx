import Background from "../../components/Background";
import Header from "../../components/Header";
import PromoCards from "../../components/PromoCards";
import * as S from "./styles";

function Home() {
  return (
    <S.Container>
      <Header />
      <Background />
      <PromoCards />
    </S.Container>
  );
}

export default Home;
