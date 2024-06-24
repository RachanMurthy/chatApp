import express from "express";

const PORT = 8000;
const app = express();

app.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}/`);
})