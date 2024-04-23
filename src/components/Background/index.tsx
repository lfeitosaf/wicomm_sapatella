import backgroundImg1 from "../../assets/image 1.png";
import backgroundImg2 from "../../assets/image 3.png";
import MiddleAd from "../MiddleAd/index.";
import * as S from "./style";
import img1 from "../../assets/image 2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

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
      <S.SecondContainer>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="special-swiper"
          navigation
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        >
          {ImagesArray.map((image) => (
            <SwiperSlide key={image.id}>
              <MiddleAd image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SecondContainer>
      <S.ImgContainer>
        <S.BackgroundImg src={backgroundImg1} alt="background1" />
        <S.BackgroundImg src={backgroundImg2} alt="background2" />
      </S.ImgContainer>
      <S.BackgroundGradient />
    </S.ContainerBackground>
  );
};

export default Background;
