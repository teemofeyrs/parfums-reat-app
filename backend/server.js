import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
dotenv.config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect(process.env.MONGO_DB_URL || 'mongodb+srv://natali:filip2007@cluster0.bhctn.mongodb.net/parfums?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', ((req, res) => {
    res.send('hello')
}))

app.use((err,req,res,next) => {
    res.status(500).send({message: err.message})
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});