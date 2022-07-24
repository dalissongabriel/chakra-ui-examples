import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/RoutesConstants";
import CardScreen from "../routes/examples/card";
import FormScreen from "../routes/examples/form";
import App from "./App";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<App />} />
          <Route path={ROUTES.CARD} element={<CardScreen />} />
          <Route path={ROUTES.FORM} element={<FormScreen />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
