import styled from "styled-components";

export const ContainerBackground = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
`;

export const ImgContainer = styled.div`
  display: flex;
  height: auto;
  position: relative;
  z-index: 1;
`;

export const BackgroundImg = styled.img`
  flex: 1;
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 180px;
  background: linear-gradient(
    360deg,
    rgba(22, 22, 22, 1) 0%,
    rgba(22, 22, 22, 1) 10%,
    rgba(225, 225, 225, 0) 100%
  );
  z-index: 1;
`;
