import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'vendor' },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'service' },
  serviceProvider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'service_provider',
  },
  rating: { type: Number, min: 0, max: 5 },
  description: { type: String },
});

const Review = mongoose.model('review', reviewSchema);

export default Review;
