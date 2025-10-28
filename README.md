# PostgreSQL ExpressJS Example

A simple web application that demonstrates how to use PostgreSQL with Express.js to perform basic CRUD operations on a `usernames` table.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.

## Usage

- Run `npm run dev` to start the development server with nodemon.
- The application will be available at `http://localhost:3000`.

### Endpoints

- **`GET /`**: This is the main endpoint of the application. It retrieves all the usernames from the database and displays them in the browser.

- **`GET /delete/:username`**: This endpoint deletes a user from the database. To use it, you need to provide the username you want to delete in the URL. For example, to delete the user "John", you would navigate to `http://localhost:3000/delete/John` in your browser. After deleting the user, the application will redirect you back to the main page (`/`).

## Database

- Make sure you have PostgreSQL installed and running.
- Create a database named `top_users`.
- Create a user with a password.
- To create the `usernames` table and populate it with data, run `node db/populatedb.js`.

## Environment Variables

Create a `.env` file in the root of the project with the following variables:

```
DB_USER=your_database_user
DB_HOST=your_database_host
DB_DATABASE=your_database_name
DB_PASSWORD=your_database_password
DB_PORT=your_database_port
DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
```
# postgressql
