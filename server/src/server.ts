import express from "express";
import cors from 'cors';
import { connectDb } from "./db/db";
import { authRouter } from "./routers/auth.router";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter);

startServer()
async function startServer() {
    await connectDb()
    app.listen(PORT, () => console.log(`Server is up on port ${PORT}`))
}