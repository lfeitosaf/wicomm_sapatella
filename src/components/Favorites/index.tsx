import { useTheme } from "styled-components";
import Text from "../Text";
import * as S from "./styles";
import purseIcon from "../../assets/image 5.png";
import sneakerIcon from "../../assets/image 6.png";
import sandalsIcon from "../../assets/image 7.png";
import platformIcon from "../../assets/image 8.png";
import ProductItem from "../ProductItem";

interface Favorite {
  id: number;
  image: string;
  alt: string;
  size: number;
  price: string;
  formerPrice: string;
  installments: string;
}

const FavoritesArray: Favorite[] = [
  {
    id: 1,
    image: purseIcon,
    alt: "Tênis Clean Urbano - Branco",
    size: 277,
    price: "R$169,90",
    formerPrice: "RS209,90",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 2,
    image: sneakerIcon,
    alt: "Sandália Soft Metalizado - Preta",
    size: 277,
    price: "R$169,90",
    formerPrice: "RS209,90",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 3,
    image: sandalsIcon,
    alt: "Sapatilha Elegance - Rose",
    size: 277,
    price: "R$169,90",
    formerPrice: "RS209,90",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 4,
    image: platformIcon,
    alt: "Plataforma em Nobuck - Whisky",
    size: 277,
    price: "R$169,90",
    formerPrice: "RS209,90",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 5,
    image: purseIcon,
    alt: "Bolsas",
    size: 277,
    price: "R$169,90",
    formerPrice: "RS209,90",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 6,
    image: sneakerIcon,
    alt: "Tênis",
    size: 277,
    price: "R$169,90",
    formerPrice: "RS209,90",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 7,
    image: sandalsIcon,
    alt: "Rasteiras",
    size: 277,
    price: "R$169,90",
    formerPrice: "RS209,90",
    installments: "ou 6x de R$ 28,31 sem juros",
  },
  {
    id: 8,
    image: platformIcon,
    alt: "Plataformas",
    size: 277,
    price: "R$169,90",
    formerPrice: "RS209,90",
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
      <S.FavoritesList>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </S.FavoritesList>
    </S.FavoritesSection>
  );
};
export default Favorites;
