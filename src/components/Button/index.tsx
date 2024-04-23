import { ButtonProps } from "./button.types";
import { useTheme } from "styled-components";
import * as S from "./styles";
import Text from "../Text";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  width,
  height,
}) => {
  const theme = useTheme();
  return (
    <S.PinkButton onClick={onClick} width={width} height={height}>
      <Text
        size={theme.typography.sizes.normal}
        color={theme.colors.brand.white}
      >
        {children}
      </Text>
    </S.PinkButton>
  );
};

export default Button;
