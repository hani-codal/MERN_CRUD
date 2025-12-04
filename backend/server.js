import express from "express";
import dotenv from 'dotenv'; // to access the .env
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/products.route.js";

dotenv.config(); // load .env content to process.env

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // middleware  allows us to accept a req body as JSON 

app.use('/api/products', productRoutes)

app.listen(PORT,()=>{
    connectDB();
    console.log('Server will start at http://localhost:' + PORT);
});

