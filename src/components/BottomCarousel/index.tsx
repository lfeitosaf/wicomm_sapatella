import { SwiperSlide, Swiper } from "swiper/react";
import imgIcon from "../../assets/image 15.png";
import { FavoritesArray } from "../Favorites";
import ProductItem from "../ProductItem";
import * as S from "./styles";

const BottomCarousel = () => {
  return (
    <S.MainContainer>
      <S.SecondaryContainer>
        <img src={imgIcon} />
        <S.ProductsListWrapper>
          <Swiper
            slidesPerView={2}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 2,
            }}
            navigation
            spaceBetween={20}
          >
            {FavoritesArray.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductItem product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.ProductsListWrapper>
      </S.SecondaryContainer>
    </S.MainContainer>
  );
};

export default BottomCarousel;
