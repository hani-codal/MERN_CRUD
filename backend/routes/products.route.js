import express from "express";
import { addNewProduct, deleteProduct, getAllProducts, updateProduct } from "../controller/products.controller.js";

const routes = express.Router();

routes.get('/', getAllProducts);

routes.post('/', addNewProduct);

routes.put('/:id', updateProduct);

routes.delete('/:id', deleteProduct);

export default routes;