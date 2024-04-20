import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main.tsx";
import GlobalStyle from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>
);
