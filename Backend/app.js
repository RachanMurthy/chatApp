import express from "express";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}/`);
})