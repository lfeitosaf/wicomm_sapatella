import * as S from "./styles";
import Text from "../Text";
import { useTheme } from "styled-components";
import SizesList from "../SizesList";
import heartIcon from "../../assets/heart2.png";
import pinkHeart from "../../assets/heart3.png";
import { useState } from "react";
import { ProductProps } from "./product.types";

const ProductItem = ({ product, setCartCount }: ProductProps) => {
  const theme = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
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
          <S.Image src={product.src} alt={product.alt} />
          {isCardHovered && (
            <>
              <SizesList setCartCount={setCartCount} />
            </>
          )}
        </S.DivHeader>
        <S.DivBody>
          <Text
            size={theme.typography.sizes.tiny}
            color={theme.colors.brand.gray}
            margin={"0px 0px 20px 0px"}
          >
            {product.alt}
          </Text>
          <S.DivPrice>
            <Text
              size={theme.typography.sizes.normal}
              color={theme.colors.brand.gray}
            >
              {product.price}
            </Text>
            <Text
              size={theme.typography.sizes.small}
              color={theme.colors.brand.gray}
            >
              ̶{product.formerPrice}
            </Text>
          </S.DivPrice>
          <Text
            size={theme.typography.sizes.tiny}
            color={theme.colors.brand.gray}
          >
            {product.installments}
          </Text>
        </S.DivBody>
      </S.Card>
    </>
  );
};

export default ProductItem;
