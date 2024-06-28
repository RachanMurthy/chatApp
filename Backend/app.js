import express from "express";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use("/api/auth", authRouter);

app.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}/`);
})