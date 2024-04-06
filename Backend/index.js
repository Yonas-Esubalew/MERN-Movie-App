//import external modules
import express from "express";
import cookieparser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

// import internal code modules
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

//configuration

dotenv.config();
connectDB();

const app = express();

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
const PORT = process.env.PORT || 5000;
///routes
app.use("/api/v1/users", userRoutes);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


