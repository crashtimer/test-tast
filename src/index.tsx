import React from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
// router
import Router from "./Router";
// i18n
import i18n from "@/i18n";
// styles
import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </React.StrictMode>
);
