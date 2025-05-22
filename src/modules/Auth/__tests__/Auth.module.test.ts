import AuthModule from "../Auth.module";
import { removeStorage, setStorage } from "@/services/storage.service";

jest.mock("@/services/storage.service", () => ({
  setStorage: jest.fn(),
  removeStorage: jest.fn(),
  getStorage: jest.fn(),
}));

describe("Auth Module", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    AuthModule.setUsername("");
    AuthModule.setIsLoggedIn(false);
  });

  describe("login", () => {
    it("should set username in storage", () => {
      const username = "testuser";
      AuthModule.login(username);
      expect(setStorage).toHaveBeenCalledWith("username", username);
    });

    it("should update module state with username", () => {
      const username = "testuser";
      AuthModule.login(username);
      expect(AuthModule.username).toBe(username);
    });

    it("should set isLoggedIn to true", () => {
      const username = "testuser";
      AuthModule.login(username);
      expect(AuthModule.isLoggedIn).toBe(true);
    });
  });

  describe("logout", () => {
    it("should remove username from storage", () => {
      AuthModule.logout();
      expect(removeStorage).toHaveBeenCalledWith("username");
    });

    it("should clear username in module state", () => {
      AuthModule.login("testuser");
      AuthModule.logout();
      expect(AuthModule.username).toBe("");
    });

    it("should set isLoggedIn to false", () => {
      AuthModule.login("testuser");
      AuthModule.logout();
      expect(AuthModule.isLoggedIn).toBe(false);
    });
  });

  describe("state management", () => {
    it("should maintain correct state after login and logout sequence", () => {
      const username = "testuser";

      expect(AuthModule.username).toBe("");
      expect(AuthModule.isLoggedIn).toBe(false);

      AuthModule.login(username);
      expect(AuthModule.username).toBe(username);
      expect(AuthModule.isLoggedIn).toBe(true);

      AuthModule.logout();
      expect(AuthModule.username).toBe("");
      expect(AuthModule.isLoggedIn).toBe(false);
    });
  });
});
