import express from 'express';
import data from "../data.js";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const productRouter = express.Router();
productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const product =await Product.find({});
    res.send(product);
}))

productRouter.get('/seed',
    expressAsyncHandler(async (req, res) => {
            const createParfums = await Product.insertMany(data.parfums);
            res.send({createParfums})
        }
    ))

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product =await Product.findById(req.params.id)
    if (!product) {
        res.status(404).send({message: 'Товар не найден....'})
    }
    res.send(product)
}))
export default productRouter;