import express from 'express';
import data from "./data.js";

const port = process.env.PORT || 3030

const app = express();

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
app.get('/', ((req, res) => {
    res.send('hello')
}))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});