import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/index.tsx";
import GlobalStyle from "./styles/global.ts";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/index.ts";

import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
