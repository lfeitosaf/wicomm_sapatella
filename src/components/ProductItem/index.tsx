import * as S from "./styles";
import sneakerIcon from "../../assets/image 5.png";
import Text from "../Text";
import { useTheme } from "styled-components";
import SizesList from "../SizesList";
import heartIcon from "../../assets/heart2.png";
import pinkHeart from "../../assets/heart3.png";
import { useState } from "react";

const ProductItem = () => {
  const theme = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <S.Card
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <S.DivHeader>
        <S.SpanOff>30% OFF</S.SpanOff>
        <S.HeartIcon
          onClick={handleHeartClick}
          src={isFavorite ? pinkHeart : heartIcon}
        />
        <S.Image src={sneakerIcon} alt="sneakerIcon" />
        {isCardHovered && (
          <>
            <SizesList />
            <S.Button>Adicionar à sacola</S.Button>
          </>
        )}
      </S.DivHeader>
      <S.DivBody>
        <Text
          size={theme.typography.sizes.tiny}
          color={theme.colors.brand.gray}
          margin={"0px 0px 22px 0px"}
        >
          Tênis Clean Urbano - Branco
        </Text>
        <S.DivPrice>
          <Text
            size={theme.typography.sizes.normal}
            color={theme.colors.brand.gray}
          >
            RS 169,90
          </Text>
          <Text
            size={theme.typography.sizes.small}
            color={theme.colors.brand.gray}
          >
            R$ 209,90
          </Text>
        </S.DivPrice>
        <Text
          size={theme.typography.sizes.tiny}
          color={theme.colors.brand.gray}
        >
          ou 6x de R$ 28,31 sem juros
        </Text>
      </S.DivBody>
    </S.Card>
  );
};

export default ProductItem;
