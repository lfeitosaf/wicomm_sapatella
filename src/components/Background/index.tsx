import backgroundImg1 from "../../assets/image 1.png";
import backgroundImg2 from "../../assets/image 3.png";
import MiddleAd from "../MiddleAd/index.";
import * as S from "./style";
import img1 from "../../assets/image 2.png";
import { Swiper, SwiperSlide } from "swiper/react";

interface Image {
  id: number;
  src: string;
  alt: string;
}

const ImagesArray: Image[] = [
  {
    id: 1,
    src: img1,
    alt: "Sandália Rasteira",
  },
  {
    id: 2,
    src: img1,
    alt: "Sandália Soft Metalizado - Preta",
  },
  {
    id: 3,
    src: img1,
    alt: "Plataforma em Nobuck - Whisky",
  },
];

const Background = () => {
  return (
    <S.ContainerBackground>
      <S.ImgContainer>
        <S.BackgroundImg src={backgroundImg1} alt="background1" />
        <S.BackgroundImg src={backgroundImg2} alt="background2" />
      </S.ImgContainer>
      <S.BackgroundGradient />
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {ImagesArray.map((image) => (
          <SwiperSlide key={image.id}>
            <MiddleAd image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.ContainerBackground>
  );
};

export default Background;
