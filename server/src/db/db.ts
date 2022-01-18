import mongoose from "mongoose";

const DB_NAME = 'DB_NAME';
const DB_URL = 'mongodb://localhost:27017';

export async function connectDb() {
    await mongoose.connect(DB_URL, {
        dbName: DB_NAME
    })
}