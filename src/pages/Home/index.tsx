import AboutUs from "../../components/AboutUs";
import Background from "../../components/Background";
import BirkensOffer from "../../components/BirkensOffer";
import BottomBanner from "../../components/BottomBanner";
import BottomCarousel from "../../components/BottomCarousel";
import Categories from "../../components/Categories";
import Favorites from "../../components/Favorites";
import Header from "../../components/Header";
import PromoCards from "../../components/PromoCards";
import Register from "../../components/Register";
import SandalOffer from "../../components/SandalOffer";
import * as S from "./styles";

function Home() {
  return (
    <S.Container>
      <Header />
      <Background />
      <PromoCards />
      <Categories />
      <SandalOffer />
      <Favorites />
      <BirkensOffer />
      <BottomCarousel />
      <BottomBanner />
      <AboutUs />
      <Register />
    </S.Container>
  );
}

export default Home;
