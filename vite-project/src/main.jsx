import React from "react";
/**
 * Integraçao do react com a DOM representação do nosso HTML através do JS.
 */
import ReactDOM from "react-dom/client";
import { App } from "./App";

/**
 * createRoot recebe um parametro do elemento raiz da nossa pagina HTML 'root'.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  /**
   * Renderizando o App arquivo importado, que nada mais é uma função retornando HTML.
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
