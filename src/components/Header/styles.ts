import styled from "styled-components";

export const Dashboard = styled.header`
  position: absolute;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  border: 0px 0px 1px 0px;
  background: linear-gradient(
    180deg,
    rgba(22, 22, 22, 1) 0%,
    rgba(22, 22, 22, 1) 10%,
    rgba(225, 225, 225, 0) 100%
  );
  ::placeholder {
    color: #d3d3d3;
  }
  z-index: 1;
`;
