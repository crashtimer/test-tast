import React, { useMemo } from "react";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
// modules
import BooksModule from "@/modules/Books/Books.module";
// styles
import styles from "./BookList.module.css";
import Table from "@/components/Table/Table";

const BookList = () => {
  const { list } = BooksModule;
  const { t } = useTranslation();

  const headers = useMemo(
    () => [
      { id: "id", name: t("books.id") },
      { id: "author", name: t("books.author") },
      { id: "name", name: t("books.name") },
    ],
    []
  );

  const rows = useMemo(() => {
    return list.map((item, index) => ({
      id: item.id ?? index,
      author: item.author,
      name: item.name,
    }));
  }, [list]);

  return (
    <div className={styles.bookList}>
      <Table headers={headers} rows={rows} />
    </div>
  );
};

export default observer(BookList);
