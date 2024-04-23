import styled from "styled-components";

export const SizeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 68px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
  z-index: 2;
  gap: 14px;
  border: solid 1px #d3d3d3;
  bottom: -100px;
  animation: surgir 0.5s forwards;
  @keyframes surgir {
    to {
      bottom: 32px;
    }
  }
`;

export const NumbersListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const NumbersList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 14px;
  max-width: 176px;
  overflow-x: auto;
  scroll-behavior: smooth;
  grid-template-columns: auto 1fr auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const NumberLi = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 28px;
  color: ${({ theme }) => theme.colors.brand.gray};
  font-size: ${({ theme }) => theme.typography.sizes.tiny};
  background-color: #ffffff;
  border: solid 1px ${({ theme }) => theme.colors.brand.white};
  cursor: pointer;
  &.selected {
    background-color: ${({ theme }) => theme.colors.brand.pink};
    border: solid 1px ${({ theme }) => theme.colors.brand.pink};
    color: #ffffff;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.pink};
    border: solid 1px ${({ theme }) => theme.colors.brand.pink};
    color: #ffffff;
  }
  flex: none;
`;

export const LeftButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: center;
`;

export const RightButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: rotate(180deg);
`;

export const AnimationDiv = styled.div`
  position: relative;
  bottom: -100px;
  animation: surgir 1s forwards;

  @keyframes surgir {
    to {
      bottom: 0;
    }
  }
`;
