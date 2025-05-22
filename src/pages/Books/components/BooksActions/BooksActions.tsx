import React from "react";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
// modules
import BooksModule from "@/modules/Books/Books.module";
// components
import Button from "@/components/Button/Button";
import Checkbox from "@/components/Checkbox/Checkbox";
// styles
import styles from "./BooksActions.module.css";

const BooksActions = () => {
  const { isPrivateList, switchList, resetBooks } = BooksModule;
  const { t } = useTranslation();

  const handleChange = () => {
    switchList();
  };

  const handleReset = () => {
    resetBooks();
  };

  return (
    <div className={styles.booksActions}>
      <Checkbox
        isChecked={isPrivateList}
        onChange={handleChange}
        label={t("books.actions.private")}
      />

      <div className={styles.booksActionsButtons}>
        <Button onClick={handleReset}>{t("books.actions.reset")}</Button>
      </div>
    </div>
  );
};

export default observer(BooksActions);
