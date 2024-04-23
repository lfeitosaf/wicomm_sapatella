import { SwiperSlide, Swiper } from "swiper/react";
import imgIcon from "../../assets/image 15.png";
import { FavoritesArray } from "../Favorites";
import ProductItem from "../ProductItem";
import * as S from "./styles";
import { motion } from "framer-motion";

const BottomCarousel = ({ setCartCount }: any) => {
  return (
    <S.MainContainer>
      <S.SecondaryContainer>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src={imgIcon} />
        </motion.div>
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
                <ProductItem product={product} setCartCount={setCartCount} />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.ProductsListWrapper>
      </S.SecondaryContainer>
    </S.MainContainer>
  );
};

export default BottomCarousel;
