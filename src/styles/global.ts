import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz@0,9..40;1,9..40&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "DM Sans", sans-serif;
        font-weight: 400;
        font-style: normal;
        --swiper-navigation-size: 10px;
        --swiper-pagination-color: pink;
        --swiper-pagination-bullet-size: 8px;
        --swiper-pagination-bullet-active: 16px;
        --swiper-pagination-bullet-width: 8px;
        --swiper-pagination-bullet-height: 8px;
        --swiper-pagination-bullet-inactive-color: #000;
        --swiper-pagination-bullet-inactive-opacity: 0.2;
        --swiper-pagination-bullet-opacity: 1;
        --swiper-pagination-bullet-horizontal-gap: 4px;
        --swiper-pagination-bullet-vertical-gap: 6px;
    }

    .swiper-horizontal{
        margin-top: 20px;
    }

    .swiper-pagination-bullet{
        border-radius: 0%;
        background-color: #CF215B
    }
    .swiper-pagination-bullet-active{
        width: 16px;
        height: 8px;
    }
    .swiper-pagination-bullet-inactive{
        background-color: #D3D3D3;
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
