import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  .swiper-button-prev {
    left: 0;
    color: black;
  }
  .swiper-button-next {
    right: 0;
    color: black;
  }
  .swiper-slide-prev {
    color: black;
  }
`;

export const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1280px;
  gap: 56px;
`;

export const ProductsListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
  margin-bottom: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;
