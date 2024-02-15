# Virginia-Tech-College-of-Science-Internship-Hub

Welcome to the Virginia Tech College of Science Internship Hub! This full-stack application is designed to help students discover internship opportunities. The project is built with a React frontend, Express backend, and MySQL database.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure user authentication system to manage accounts.
- **Internship Listings:** Browse and search for available internship opportunities.
- **Admin Panel:** Admins can manage internship listings.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- MySQL: [Download MySQL](https://www.mysql.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/andy1uu/Virginia-Tech-College-of-Science-Internship-Hub.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Virginia-Tech-College-of-Science-Internship-Hub
    ```

3. Install frontend dependencies:

    ```bash
    cd frontend
    npm install
    ```

4. Install backend dependencies:

    ```bash
    cd ../backend
    npm install
    ```

5. Set up MySQL database:

    - Create a MySQL database and configure the connection in the `backend/config/database.config.js` file.

6. Start the development server:

    ```bash
    cd ../frontend
    npm run dev
    ```

## Usage

1. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the application.
2. Explore internship listings.

## Tech Stack

- **Frontend:**
  - React
  - React Router

- **Backend:**
  - Express.js
  - MySQL

- **Authentication:**
  - JSON Web Tokens (JWT)

- **Other Tools:**
  - Axios for API requests

## Contributing

Feel free to contribute to the project. Fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize the content as per your project's specific details and requirements.