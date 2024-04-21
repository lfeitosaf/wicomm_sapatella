import backgroundImg1 from "../../assets/image 1.png";
import backgroundImg2 from "../../assets/image 3.png";
import * as S from "./style";

const Background = () => {
  return (
    <S.ContainerBackground>
      <S.BackgroundImg src={backgroundImg1} alt="background1" />
      <S.BackgroundImg src={backgroundImg2} alt="background2" />
    </S.ContainerBackground>
  );
};

export default Background;
