import express from 'express';
import data from "../data.js";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import fetch from "node-fetch";

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
productRouter.get('/usd', expressAsyncHandler(async (req, res) => {
    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json');
    const data = await response.json();
    const USD = data.find(currency => currency.cc === 'USD');
    res.send(USD);
}))
productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product =await Product.findById(req.params.id)
    if (!product) {
        res.status(404).send({message: 'Товар не найден....'})
    }
    res.send(product)
}))
export default productRouter;