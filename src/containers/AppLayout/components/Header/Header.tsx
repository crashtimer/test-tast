import React from "react";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
// modules
import AuthModule from "@/modules/Auth/Auth.module";
import BooksModule from "@/modules/Books/Books.module";
// styles
import styles from "./Header.module.css";
// components
import Button from "@/components/Button/Button";

const Header = () => {
  const { logout, username } = AuthModule;
  const { list } = BooksModule;
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={styles.header}>
      <h1>{t("header.welcome", { username })}</h1>

      <div className={styles.booksCount}>
        <span>{t("header.booksCount", { count: list.length })}</span>
      </div>

      <Button onClick={handleLogout}>{t("header.logout")}</Button>
    </div>
  );
};

export default observer(Header);
