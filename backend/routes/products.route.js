import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";

const routes = express.Router();

routes.get('/', async(req,res)=>{
    try{
        const products = await Product.find({}); //pass empty {} to get all records
        res.status(201).json({success:true, data:products})
    }catch(error){
        res.status(500).json({success:false, message: "server error" })
    }
});

routes.post('/',async(req,res)=>{
    const product = req.body;
    if(!product.name || !product.price || !product.image){
        res.status(400).json({success:false,message:"Please provide valid details"})
    }
    const newProduct = new Product(product);
    try{
       await newProduct.save() // save on DB
       res.status(201).json({success:true, data: newProduct})
    }catch(error){
        res.status(500).json({success:false,message:"server "})
    }
});

routes.put('/:id', async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false,message:"Product with id not found."})
    }
    try{
        const prodData = req.body;
        const updatedProd = await Product.findByIdAndUpdate(id, prodData,{new:true});
        res.status(200).json({success:true,data:updatedProd}) 
    }catch(error){
        res.status(500).json({success:false,message:"server error"})
    }
});

routes.delete('/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        await Product.findByIdAndDelete(id);
        res.status(201).json({success:true,message:"Product is deleted"})
    }catch(error){
        res.status(404).json({success:false,message:"Product not found"})
    }
});

export default routes;