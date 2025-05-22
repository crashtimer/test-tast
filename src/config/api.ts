export const ENDPOINTS = {
  // BOOKS ENDPOINTS
  BOOKS: "/books/{username}",
  PRIVATE_BOOKS: "/books/{username}/private",
  RESET_BOOKS: "/books/{username}/reset",
  // TEST ENDPOINTS
  TEST_ENDPOINT: "/test-endpoint",
  TEST_ENDPOINT_WITH_PARAMS: "/users/{id}/posts/{postId}",
} as const;

export type URLs = keyof typeof ENDPOINTS;
