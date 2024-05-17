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
And Finally Write A Command 
   npm run Fullstack 

   the app is Running.


    
