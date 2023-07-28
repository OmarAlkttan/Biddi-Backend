import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  reviews: { type: mongoose.Schema.Types.ObjectId, ref: 'review' },
  rating: { type: Number, min: 0, max: 5 },
  section: { type: String },
  imageUrl: { type: String },
  options: { type: Array },
});

const Product = mongoose.model('product', productSchema);

export default Product;
