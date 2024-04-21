import Background from "../../components/Background";
import Categories from "../../components/Categories";
import Header from "../../components/Header";
import PromoCards from "../../components/PromoCards";
import * as S from "./styles";

function Home() {
  return (
    <S.Container>
      <Header />
      <Background />
      <PromoCards />
      <Categories />
    </S.Container>
  );
}

export default Home;
