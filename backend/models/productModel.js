import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{type: String, required: true, unique: true},
    shotName: {type: String, required: true},
    brand: {type: String, required: true},
    image: {type: String, required: true},
    sex: {type: String, required: true},
    size: {type: Number, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    rating: {type: Number, required: true}
}, {
    timestamp:true
});

const Product = mongoose.model('Product', productSchema);

export default Product;