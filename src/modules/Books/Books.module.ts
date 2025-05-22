// services
import { getStorage } from "@/services/storage.service";
import request from "@/services/api.service";
// stores
import BooksStore from "./Books.store";

class BooksModule extends BooksStore {
  constructor() {
    super();
  }

  switchList = () => {
    this.setList([]);
    this.setIsPrivateList(!this.isPrivateList);
  };

  getBooks = async () => {
    const username = getStorage("username")!;

    const data = await request<Book[]>("BOOKS", {
      params: { username },
    });

    if (data) {
      this.setList(data);
    }
  };

  getPrivateBooks = async () => {
    const username = getStorage("username")!;

    const data = await request<Book[]>("PRIVATE_BOOKS", {
      params: { username },
    });

    if (data) {
      this.setList(data);
    }
  };

  addBook = async (book: BookRequestBody) => {
    const username = getStorage("username")!;

    const data = await request<Book>("BOOKS", {
      method: "POST",
      params: { username },
      body: { ...book, ownerId: username },
    });

    if (data) {
      this.addItem(book as Book);
    }
  };

  resetBooks = async () => {
    const username = getStorage("username")!;

    const data = await request<Book[]>("RESET_BOOKS", {
      method: "PUT",
      params: { username },
    });

    if (data) {
      this.setList([]);
    }
  };
}

export default new BooksModule();
