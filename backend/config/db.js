import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected DB ", db.connection.host);
    }
    catch(err){
        console.log("error ", err);
        process.exit(1); // 1 stands for failure and 0 stands for success 
    }
}