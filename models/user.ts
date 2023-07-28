import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  hash: { type: String },
  refreshToken: { type: String },
  role: {
    type: String,
    enum: ['consumer', 'rider', 'vendor', 'admin', 'support', 'sales'],
  },
  provider: {
    type: String,
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'review' }],
  addresses: [
    {
      title: { type: String, required: true },
      governorate: { type: String, required: true },
      details: { type: String, required: true },
      location: { latitude: { type: Number }, longitude: { type: Number } },
      extraDetails: { type: String, required: true },
      phone: { type: String },
    },
  ],
  favorites: {
    vendors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'vendor' }],
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'service' }],
  },
  wallet: {
    balance: { type: Number },
  },
  notifications: [
    {
      type: { type: String },
      status: { type: Boolean },
    },
  ],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'order' }],
  cart: {
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
        vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'vendor' },
        quantity: { type: Number },
        options: { type: Array },
        note: { type: String },
        estimatedTime: { type: String },
      },
    ],
    total: { type: Number },
    voucher: { type: String },
  },
});

const User = mongoose.model('user', userSchema);

export default User;
