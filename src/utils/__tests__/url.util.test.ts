import { replaceUrlParams } from "../url.util";

global.fetch = jest.fn();

describe("API Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("replaceUrlParams", () => {
    it("should return original URL when no params provided", () => {
      const url = "/users/{id}/posts/{postId}";
      expect(replaceUrlParams(url)).toBe(url);
    });

    it("should replace URL parameters with provided values", () => {
      const url = "/users/{id}/posts/{postId}";
      const params = { id: "123", postId: "456" };
      expect(replaceUrlParams(url, params)).toBe("/users/123/posts/456");
    });

    it("should keep unmatched parameters in URL", () => {
      const url = "/users/{id}/posts/{postId}";
      const params = { id: "123" };
      expect(replaceUrlParams(url, params)).toBe("/users/123/posts/{postId}");
    });
  });
});
