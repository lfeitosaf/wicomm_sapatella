import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz@0,9..40;1,9..40&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "DM Sans", sans-serif;
        list-style: none;
        font-weight: 400;
        font-style: normal;
        --swiper-navigation-size: 10px;
        --swiper-pagination-color: #d3d3d3;
        --swiper-pagination-bullet-size: 8px;
        --swiper-pagination-bullet-active: 16px;
        --swiper-pagination-bullet-width: 8px;
        --swiper-pagination-bullet-height: 8px;
        --swiper-pagination-bullet-inactive-color: #D3D3D3;
        --swiper-pagination-bullet-inactive-opacity: 1;
        --swiper-pagination-bullet-opacity: 1;
        --swiper-pagination-bullet-horizontal-gap: 4px;
        --swiper-pagination-bullet-vertical-gap: 6px;
    }
    .swiper-button-prev,.swiper-button-next {
        top: 140px;
    }
    .special-swiper .swiper-button-prev,
    .special-swiper .swiper-button-next {
        --swiper-navigation-size: 12px;
        background: #D3D3D3;
        width: 40px;
        height: 40px;
        top: 280px;
        border-radius: 50%;
    }

    .swiper-horizontal{
        margin-top: 20px;
    }

    .swiper-pagination-bullet{
        background-color: #D3D3D3;
        border-radius: 0%;
    }
    .swiper-pagination-bullet-active{
        background-color: #CF215B;
        width: 16px;
        height: 8px;
    }
    .swiper-container {
    z-index: 999;
    }


    html, body {
        height: 100%;
    }

    button {
        background-color: none;
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
        outline: none;
    }

    
`;

export default globalStyle;
