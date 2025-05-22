What is done:

1. Moved to Vite
2. Moved to TS
3. Restructured project
4. Added localization
5. Added reset.css
6. Update packages to latest
7. Added .env
8. Added Router
9. Protected routes and Auth proceess
10. Layouts for Auth / App
11. Reworked request service
12. Implemented modules
13. Sticky header
14. Auth flow and Login Page

Problems:

1. Swagger doesn't reflect API params, body, etc.
2. BE has no validations
3. With correct request body { name, author } body while adding a book BE saves as empty array {}
4. Better to implement 1 GET method with queryParam instead of clonning 2 endpoinds
5. PUT doesn't seem to be a valid/good method for clearing a list
6. POST response should not be "ok", it should return full Book object with assigned ID

Nice to add:

1. Ui library
