import * as S from "./style";
import { TextProps } from "./text.types";

const Text: React.FC<TextProps> = ({ children, size, color, margin }) => {
  return (
    <S.StyledText size={size} color={color} margin={margin}>
      {children}
    </S.StyledText>
  );
};

export default Text;
