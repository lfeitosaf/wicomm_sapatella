import { useTheme } from "styled-components";
import Text from "../Text";
import * as S from "./styles";
import purseIcon from "../../assets/image 5.png";
import sneakerIcon from "../../assets/image 6.png";
import sandalsIcon from "../../assets/image 7.png";
import platformIcon from "../../assets/image 8.png";
import ProductItem from "../ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";

interface Favorite {
  id: number;
  src: string;
  alt: string;
  size: number;
  price: string;
  formerPrice: string;
  installments: string;
}

const FavoritesArray: Favorite[] = [
  {
    id: 1,
    src: purseIcon,
    alt: "Tênis Clean Urbano - Branco",
    size: 277,
    price: "R$169,90",
    formerPrice: "R̶$̶ ̶2̶0̶9̶,̶9̶0̶",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 2,
    src: sneakerIcon,
    alt: "Sandália Soft Metalizado - Preta",
    size: 277,
    price: "R$169,90",
    formerPrice: "R̶$̶ ̶2̶0̶9̶,̶9̶0̶",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 3,
    src: sandalsIcon,
    alt: "Sapatilha Elegance - Rose",
    size: 277,
    price: "R$169,90",
    formerPrice: "R̶$̶ ̶2̶0̶9̶,̶9̶0̶",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 4,
    src: platformIcon,
    alt: "Plataforma em Nobuck - Whisky",
    size: 277,
    price: "R$169,90",
    formerPrice: "R̶$̶ ̶2̶0̶9̶,̶9̶0̶",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 5,
    src: purseIcon,
    alt: "Bolsas",
    size: 277,
    price: "R$169,90",
    formerPrice: "R̶$̶ ̶2̶0̶9̶,̶9̶0̶",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 6,
    src: sneakerIcon,
    alt: "Tênis",
    size: 277,
    price: "R$169,90",
    formerPrice: "R̶$̶ ̶2̶0̶9̶,̶9̶0̶",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 7,
    src: sandalsIcon,
    alt: "Rasteiras",
    size: 277,
    price: "R$169,90",
    formerPrice: "R̶$̶ ̶2̶0̶9̶,̶9̶0̶",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 8,
    src: platformIcon,
    alt: "Plataformas",
    size: 277,
    price: "R$169,90",
    formerPrice: "R̶$̶ ̶2̶0̶9̶,̶9̶0̶",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 9,
    src: purseIcon,
    alt: "Bolsas",
    size: 277,
    price: "R$169,90",
    formerPrice: "R̶$̶ ̶2̶0̶9̶,̶9̶0̶",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 10,
    src: sneakerIcon,
    alt: "Tênis",
    size: 277,
    price: "R$169,90",
    formerPrice: "R̶$̶ ̶2̶0̶9̶,̶9̶0̶",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 11,
    src: sandalsIcon,
    alt: "Rasteiras",
    size: 277,
    price: "R$169,90",
    formerPrice: "R̶$̶ ̶2̶0̶9̶,̶9̶0̶",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 12,
    src: platformIcon,
    alt: "Plataformas",
    size: 277,
    price: "R$169,90",
    formerPrice: "R̶$̶ ̶2̶0̶9̶,̶9̶0̶",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
];

const Favorites = () => {
  const theme = useTheme();

  return (
    <S.FavoritesSection>
      <Text
        size={theme.typography.sizes.very_large}
        color={theme.colors.brand.gray}
      >
        Favoritos da Semana
      </Text>
      <S.FavoritesListWrapper>
        <Swiper
          slidesPerView={4}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 2,
          }}
          navigation
        >
          {FavoritesArray.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.FavoritesListWrapper>
    </S.FavoritesSection>
  );
};

export default Favorites;
