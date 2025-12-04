import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name:{
        type: "string",
        required: true
    },
    price:{
        type:"number",
        required:true
    },
    image:{
        type:"string",
        required:true
    }
},
{
    timestamps:true // to get the updatedAt and createdAt
}
);

const Product = mongoose.model("Product",productSchema);

export default Product;