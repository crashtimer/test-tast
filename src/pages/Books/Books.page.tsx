import React, { useEffect } from "react";
import { observer } from "mobx-react";
// modules
import BooksModule from "@/modules/Books/Books.module";
// components
import BookList from "./components/BooksList/BookList";
import BooksActions from "./components/BooksActions/BooksActions";
import AddBookForm from "./components/AddBookForm/AddBookForm";

const BooksPage = () => {
  const { getBooks, getPrivateBooks, isPrivateList } = BooksModule;

  useEffect(() => {
    if (isPrivateList) {
      getPrivateBooks();
    } else {
      getBooks();
    }
  }, [isPrivateList]);

  return (
    <>
      <AddBookForm />
      <BooksActions />
      <BookList />
    </>
  );
};

export default observer(BooksPage);
