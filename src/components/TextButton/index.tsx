import * as S from "./style";
import { TextProps } from "./text.types";

const TextButton: React.FC<TextProps> = ({ children, size, color }) => {
  return (
    <S.StyledText size={size} color={color}>
      {children}
    </S.StyledText>
  );
};

export default TextButton;
