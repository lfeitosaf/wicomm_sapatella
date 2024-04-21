import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  height: 370px;
  position: relative;
`;

export const DivHeader = styled.div`
  display: flex;
  height: 277px;
  width: 277px;
  margin-bottom: 12px;
  position: relative;
`;

export const DivBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DivPrice = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.brand.pink};
  color: ${({ theme }) => theme.colors.brand.white};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 277px;
  height: 32px;
  position: absolute; /* Adicionando posição absoluta */
  bottom: 0; /* Alinhando na parte inferior */
  left: 50%; /* Alinhando no centro */
  transform: translateX(-50%); /* Centralizando horizontalmente */
  z-index: 2; /* Garantindo que o botão fique por cima da imagem */
`;

export const Image = styled.img`
  position: absolute; /* Adicionando posição absoluta */
  width: 100%;
  height: 100%;
  object-fit: cover; /* Para garantir que a imagem cubra todo o espaço */
  z-index: 1; /* Garantindo que a imagem fique abaixo do botão */
`;

export const SpanOff = styled.span`
  display: flex;
  position: absolute; /* Adicionando posição absoluta */
  text-align: center;
  width: 64px;
  height: 24px;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.brand.pink};
  color: ${({ theme }) => theme.colors.brand.white};
  font-size: ${({ theme }) => theme.typography.sizes.very_tiny};
  justify-content: center;
  align-items: center;
`;
