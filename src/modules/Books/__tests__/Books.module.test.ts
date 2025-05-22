import BooksModule from "../Books.module";
import { getStorage } from "@/services/storage.service";
import request from "@/services/api.service";

jest.mock("@/services/storage.service", () => ({
  getStorage: jest.fn(),
}));

jest.mock("@/services/api.service", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../Books.store", () => {
  return jest.fn().mockImplementation(() => ({
    list: [],
    isPrivateList: false,
    setList: jest.fn(),
    setIsPrivateList: jest.fn(),
    addItem: jest.fn(),
    reset: jest.fn(),
  }));
});

describe("Books Module", () => {
  const mockUsername = "testuser";
  const mockBooks = [
    { id: 1, name: "Book 1", author: "Author 1", ownerId: mockUsername },
    { id: 2, name: "Book 2", author: "Author 2", ownerId: mockUsername },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (getStorage as jest.Mock).mockReturnValue(mockUsername);
  });

  describe("switchList", () => {
    it("should clear list and toggle isPrivateList", () => {
      BooksModule.switchList();
      expect(BooksModule.setList).toHaveBeenCalledWith([]);
      expect(BooksModule.setIsPrivateList).toHaveBeenCalledWith(true);
    });
  });

  describe("getBooks", () => {
    it("should fetch and set public books", async () => {
      (request as jest.Mock).mockResolvedValueOnce(mockBooks);

      await BooksModule.getBooks();

      expect(request).toHaveBeenCalledWith("BOOKS", {
        params: { username: mockUsername },
      });
      expect(BooksModule.setList).toHaveBeenCalledWith(mockBooks);
    });

    it("should not set list if no data returned", async () => {
      (request as jest.Mock).mockResolvedValueOnce(null);

      await BooksModule.getBooks();

      expect(BooksModule.setList).not.toHaveBeenCalled();
    });
  });

  describe("getPrivateBooks", () => {
    it("should fetch and set private books", async () => {
      (request as jest.Mock).mockResolvedValueOnce(mockBooks);

      await BooksModule.getPrivateBooks();

      expect(request).toHaveBeenCalledWith("PRIVATE_BOOKS", {
        params: { username: mockUsername },
      });
      expect(BooksModule.setList).toHaveBeenCalledWith(mockBooks);
    });

    it("should not set list if no data returned", async () => {
      (request as jest.Mock).mockResolvedValueOnce(null);

      await BooksModule.getPrivateBooks();

      expect(BooksModule.setList).not.toHaveBeenCalled();
    });
  });

  describe("addBook", () => {
    const newBook = {
      name: "New Book",
      author: "New Author",
    };

    it("should add a new book", async () => {
      const mockResponse = {
        ...newBook,
        id: 3,
        ownerId: mockUsername,
      };
      (request as jest.Mock).mockResolvedValueOnce(mockResponse);

      await BooksModule.addBook(newBook);

      expect(request).toHaveBeenCalledWith("BOOKS", {
        method: "POST",
        params: { username: mockUsername },
        body: { ...newBook, ownerId: mockUsername },
      });
      expect(BooksModule.addItem).toHaveBeenCalledWith(newBook);
    });

    it("should not add item if no data returned", async () => {
      (request as jest.Mock).mockResolvedValueOnce(null);

      await BooksModule.addBook(newBook);

      expect(BooksModule.addItem).not.toHaveBeenCalled();
    });
  });

  describe("resetBooks", () => {
    it("should reset books list", async () => {
      (request as jest.Mock).mockResolvedValueOnce([]);

      await BooksModule.resetBooks();

      expect(request).toHaveBeenCalledWith("RESET_BOOKS", {
        method: "PUT",
        params: { username: mockUsername },
      });
      expect(BooksModule.setList).toHaveBeenCalledWith([]);
    });

    it("should not set list if no data returned", async () => {
      (request as jest.Mock).mockResolvedValueOnce(null);

      await BooksModule.resetBooks();

      expect(BooksModule.setList).not.toHaveBeenCalled();
    });
  });
});
