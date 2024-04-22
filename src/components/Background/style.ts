import styled from "styled-components";

export const ContainerBackground = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  .swiper-horizontal {
    height: 600px;
    width: 80%;
  }
  .swiper-button-prev {
    left: 0;
    color: black;
  }
  .swiper-button-next {
    right: 0;
    color: black;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  height: auto;
  position: relative;
  z-index: 1;
`;

export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
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

export const SecondContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

export const ButtonPrev = styled.button`
  position: absolute;
  top: 0;
  width: 50px;
  height: 50px;
  z-index: 99999;
`;
