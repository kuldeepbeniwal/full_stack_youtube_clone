import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: process.env.ORIGIN_ALLOWED,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static('public'))
app.use(cookieParser())

// routes
import userRouter from "./routes/user.route.js"
import { registerUser } from "./controllers/users.contoller.js";
app.use("/users",userRouter)

// app.get("/users",registerUser)



export { app }; 
