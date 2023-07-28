import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
      vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'vendor' },
      quantity: { type: Number },
      options: { type: Array },
      note: { type: String },
      isReturned: { type: Boolean },
    },
  ],
  station: [
    {
      vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'vendor' },
      state: { type: String },
    },
  ],
  state: {
    type: String,
    enum: ['pending', 'preparing', 'delivering', 'delieverd'],
  },
  address: {
    title: { type: String, required: true },
    governorate: { type: String, required: true },
    details: { type: String, required: true },
    location: { latitude: { type: Number }, longitude: { type: Number } },
    extraDetails: { type: String, required: true },
    phone: { type: String },
  },
  totalPrice: { type: Number },
  driversCount: { type: Number },
  drivers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'driver' }],
  location: {
    longitude: { type: Number },
    latitude: { type: Number },
  },
  deliveryPrice: { type: Number },
  paymentMethod: { type: String },
  isCanceled: { type: Boolean },
});

const Order = mongoose.model('order', orderSchema);

export default Order;
