import express from "express";
import dotenv from 'dotenv'; // to access the .env
import path from 'path';
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/products.route.js";

dotenv.config(); // load .env content to process.env

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve(); // go to the root 
app.use(express.json()); // middleware  allows us to accept a req body as JSON 

app.use('/api/products', productRoutes)
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/frontend/dist')));
    // app.get('*',(req,res)=>{
    //     res.sendFile(path.resolve(__dirname,'frontend','dist','index.html'))
    // })
} 

app.listen(PORT,()=>{
    connectDB();
    console.log('Server will start at http://localhost:' + PORT);
});

