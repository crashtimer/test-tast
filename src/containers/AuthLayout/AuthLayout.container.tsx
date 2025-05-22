import React from "react";
import { Outlet } from "react-router-dom";
// styles
import styles from "./Auth.module.css";

const AuthLayout = () => {
  return (
    <div className={styles.auth}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
