import { useState, useRef } from "react";
import Text from "../Text";
import * as S from "./styles";
import { useTheme } from "styled-components";
import arrow from "../../assets/chevron-left-alt.png";
import { Button } from "../ProductItem/styles";

const SizesList = ({ setCartCount }: any) => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const carousel = useRef<HTMLUListElement>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= 100;
    }
  };

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += 100;
    }
  };

  const numberArray = Array.from({ length: 9 }, (_, i) => i + 34);

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <S.SizeDiv>
        <Text
          size={theme.typography.sizes.tiny}
          color={theme.colors.brand.gray}
        >
          Selecione um tamanho
        </Text>
        <S.NumbersListWrapper>
          <S.LeftButton onClick={handleLeftClick}>
            <img src={arrow} alt="Scroll Left" />
          </S.LeftButton>
          <S.NumbersList id="numbersList" ref={carousel}>
            {numberArray.map((number, index) => (
              <S.NumberLi
                key={index}
                onClick={() => handleItemClick(index)}
                className={selectedItem === index ? "selected" : ""}
              >
                {number}
              </S.NumberLi>
            ))}
          </S.NumbersList>
          <S.RightButton onClick={handleRightClick}>
            <img src={arrow} alt="Scroll Right" />
          </S.RightButton>
        </S.NumbersListWrapper>
        <Button onClick={addToCart}>Adicionar à sacola</Button>
      </S.SizeDiv>
    </>
  );
};

export default SizesList;
