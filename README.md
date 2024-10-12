# Node Admin Panel

This is a Node.js-based admin panel project built using Express, EJS for templating, and MySQL as the database. It follows the MVC (Model-View-Controller) architecture.

## Project Structure

```bash
Node admin panel
├── controller/       # Controller files for handling logic
├── helper/           # Helper files for utilities
├── models/           # Database models
├── public/           # Static files (images, CSS, JS)
├── routes/           # Route handlers
├── views/            # EJS templates for the front-end
├── .gitignore        # Files and folders to be ignored by git
├── README.md         # Project documentation
├── app.js            # Entry point for the application
├── package.json      # Project configuration and dependencies
├── package-lock.json # Exact version dependency tree
```

## Installation

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v12+)
- **npm** (v6+)

### Steps to Install

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/admin-panel.git
   cd admin-panel
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file at the root of your project.
   - Add the following variables with your configuration:
     ```bash
     DB_HOST=your_mysql_host
     DB_USER=your_mysql_username
     DB_PASSWORD=your_mysql_password
     DB_NAME=your_database_name
     SECRET_KEY=your_secret_key
     ```

4. **Run the application**:
   ```bash
   npm start
   ```
   The application should now be running at `http://localhost:3000`.

## Features

- **User Authentication**: Login and session management using `express-session` and `bcryptjs`.
- **Input Validation**: Request validation with `express-validator` and `Joi`.
- **File Uploads**: Handle file uploads with `multer`.
- **JWT Tokens**: Authorization using JSON Web Tokens (`jsonwebtoken`).
- **EJS Templating**: Dynamic rendering of views using EJS.
- **MySQL Database**: Integration with MySQL to manage admin data.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **EJS**: Template engine for rendering dynamic HTML pages.
- **MySQL**: Relational database.
- **bcryptjs**: Library to hash passwords.
- **jsonwebtoken**: JSON Web Token for secure authentication.
- **Multer**: Middleware for file uploads.
- **express-validator**: Middleware for request validation.
- **CORS**: Enable cross-origin requests.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open `http://localhost:3000` to view it in the browser.

### `npm run dev`

Runs the app with **nodemon** for live reloading during development.
