import express from "express";
import dotenv from 'dotenv'; // to access the .env
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/products.route.js";

dotenv.config(); // load .env content to process.env

const app = express();

app.use(express.json()); // middleware  allows us to accept a req body as JSON 

app.use('/api/products', productRoutes)

app.listen(5000,()=>{
    connectDB();
    console.log('my first server hani');
});

