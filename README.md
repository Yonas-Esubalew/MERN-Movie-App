# MERN Movie Application

A **movie streaming application** inspired by Netflix, built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This application enables users to browse, search, and stream movies and TV shows with advanced filtering criteria for a personalized experience.

This MERN Movie Application Runs on The Server In The Following Rules,
Open Your Vs Code Command line On the Project
Start  the Command - cd Frontend
Then nmp install react,
    react-dom,
    react-icons,
    react-redux,
    react-router,
    react-router-dom,
    react-slick,
    react-toastify,
    slick-carousel.

Second cd .. back to Project 
 npm install bcryptjs,
    body-parser,
    concurrently,
    cookie-parser,
    dotenv,
    express,
    jsonwebtoken,
    mongoose,
    multer,
    nodemon

Then Run The Whole Frontend and Backend Codes follow These scripts description 
"scripts": {
    "fullstack": "concurrently \"npm run backend\" \"npm run frontend\"",
    "frontend": "cd frontend && npm run dev",
    "backend": "nodemon backend/index.js",
    "start": "node backend/index.js",
    "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
  }
## Features

- **User Authentication**: Secure registration and login using JSON Web Tokens (JWT).
- **Dynamic Content**: Browse and stream movies or TV shows from a rich catalog.
- **Advanced Filtering**: Filter by genre, release year, language, rating, and more.
- **Responsive Design**: Optimized for both desktop and mobile platforms.
- **Watchlist**: Add movies to your watchlist to enjoy later.
- **Continue Watching**: Resume where you left off.
- **Admin Panel**: Manage content, including adding, editing, and deleting movies.

---

## Tech Stack

### Frontend
- React.js
- React Router
- Redux Toolkit (for state management)
- TailwindCSS / Material-UI (for styling)

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ORM)
- Cloudinary (for media storage)

### Additional Tools
- JWT (for authentication)
- bcrypt.js (for password hashing)
- dotenv (for environment variables)

---

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yonas-Esubalew/mern-movie-app.git
   cd mern-movie-app
   ```

2. Install dependencies for both the frontend and backend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following keys:
     ```env
     MONGO_URI='mongodb+srv://yourusername@cluster0.r24523p.mongodb.net/moviesApp?retryWrites=true&w=majority&appName=Cluster0'
     JWT_SECRET=your Api Sectet code
     ```

4. Start the development servers:
   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

5. Open your browser and visit: `http://localhost:3000`.

---

## File Structure

```
mern-movie-streaming-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── config/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.js
│   │   └── index.js
├── README.md
└── .gitignore
```

---

## Usage

- Register or log in to access the platform.
- Browse movies and TV shows by category.
- Use filters to find content matching your preferences.
- Add items to your watchlist or resume previously watched content.


## Contributing

Contributions are welcome! If you have suggestions or want to improve the project, feel free to:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.


## Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)

---

## Contact

- **Author**: [Yonas Esubalew](https://github.com/Yonas-Esubalew)
- **Email**: yonasatwork999@gmail.com


    
