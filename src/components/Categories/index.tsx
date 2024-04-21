import { useTheme } from "styled-components";
import Icon from "../Icon";
import Text from "../Text";
import * as S from "./styles";
import purseIcon from "../../assets/image 19.png";
import sneakerIcon from "../../assets/image 20.png";
import sandalsIcon from "../../assets/image 21.png";
import platformIcon from "../../assets/image 22.png";
import bootsIcon from "../../assets/image 23.png";
import flatIcon from "../../assets/image 24.png";

interface Category {
  id: number;
  image: string;
  alt: string;
  size: number;
}

const CategoriesArray: Category[] = [
  { id: 1, image: purseIcon, alt: "Bolsas", size: 162 },
  { id: 2, image: sneakerIcon, alt: "Tênis", size: 162 },
  { id: 3, image: sandalsIcon, alt: "Rasteiras", size: 162 },
  { id: 4, image: platformIcon, alt: "Plataformas", size: 162 },
  { id: 5, image: bootsIcon, alt: "Botas", size: 162 },
  { id: 6, image: flatIcon, alt: "Sapatilhas", size: 162 },
];

const Categories = () => {
  const theme = useTheme();

  return (
    <S.CategoriesSection>
      <Text
        size={theme.typography.sizes.very_large}
        color={theme.colors.brand.gray}
      >
        Compre por categoria
      </Text>
      <S.CategoriesList>
        {CategoriesArray.map((category) => (
          <S.CategoryItem key={category.id}>
            <Icon src={category.image} alt={category.alt} size={162} />
            <Text color={theme.colors.brand.gray}>{category.alt}</Text>
          </S.CategoryItem>
        ))}
      </S.CategoriesList>
    </S.CategoriesSection>
  );
};
export default Categories;
