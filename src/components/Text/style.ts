import styled from "styled-components";
import { TextProps } from "./text.types";

export const StyledText = styled.p<TextProps>`
  font-size: ${(props) => props.size || "16px"};
  color: ${(props) => props.color || "black"};
`;
