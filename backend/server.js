import express from 'express';
import mongoose from 'mongoose';
import data from "./data.js";
import userRouter from "./routers/userRouter.js";

const app = express();

mongoose.connect(process.env.MONGO_DB_URL || 'mongodb+srv://natali:filip2007@cluster0.bhctn.mongodb.net/parfums?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
})

app.get('/api/products/:id', (req, res) => {
    const item = +req.params.id;
    const product = data.parfums.find(p => p._id === item)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({message: 'Товар не найден....'})
    }

})
app.get('/api/products', (req, res) => {
    res.status(200);
    res.send(data.parfums)
})
app.use('/api/users', userRouter)
app.get('/', ((req, res) => {
    res.send('hello')
}))

app.use((err,req,res,next) => {
    res.status(500).send({message: err.message})
})

const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});