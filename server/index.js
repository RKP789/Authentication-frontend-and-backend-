import express from "express";
import dotenv from "dotenv";
import connectdb from "./database/connect_db.js";
import authRoutes from "./routes/auth_routes.js";
import userRoutes from "./routes/user_routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

// connecting database
connectdb();

app.use(cors({ origin: "http://localhost:5174", credentials: true }));

// cookie-parser to parse cookie
app.use(cookieParser());

// parsing json data
app.use(express.json());

// authentication routes
app.use("/auth", authRoutes);

// user routes
app.use("/user", userRoutes);

// server is listening
app.listen(process.env.PORT, () => {
    console.log("server is running!!");
})