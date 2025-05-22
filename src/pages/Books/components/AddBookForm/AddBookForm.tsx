import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// components
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
// modules
import BooksModule from "@/modules/Books/Books.module";
// styles
import styles from "./AddBookForm.module.css";

const AddBookForm = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const { addBook } = BooksModule;
  const { t } = useTranslation();

  const handleAddBook = () => {
    addBook({ name, author });
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className={styles.addBookForm}>
      <Input
        placeholder={t("books.form.name")}
        value={name}
        onChange={handleNameChange}
        className={styles.addBookFormInput}
      />

      <Input
        placeholder={t("books.form.author")}
        value={author}
        onChange={handleAuthorChange}
        className={styles.addBookFormInput}
      />

      <Button onClick={handleAddBook} disabled={!name || !author}>
        {t("books.form.actions.add")}
      </Button>
    </div>
  );
};

export default AddBookForm;
