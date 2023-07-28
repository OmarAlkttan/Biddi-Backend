import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  about: { type: String },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'review' }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'order' }],
  location: {
    longitude: { type: Number },
    latitude: { type: Number },
  },
});

const Driver = mongoose.model('driver', driverSchema);

export default Driver;
