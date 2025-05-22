import React from "react";
import { Outlet } from "react-router-dom";
// components
import Header from "./components/Header/Header";
// styles
import styles from "./App.module.css";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Header />

      <Outlet />
    </div>
  );
};

export default AppLayout;
