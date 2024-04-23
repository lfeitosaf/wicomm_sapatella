import styled from "styled-components";

export const FavoritesSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding-bottom: 50px;
  gap: 24px;
  ::-webkit-scrollbar {
    display: none;
  }
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

export const FavoritesListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1168px;
  height: 420px;
  margin-bottom: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const FavoritesList = styled.ul`
  display: flex;
  flex-direction: row;
  scroll-behavior: smooth;
  width: 1168px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const FavoritesItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 220px;
  width: 178px;
  gap: 14px;
  flex: none;
`;
