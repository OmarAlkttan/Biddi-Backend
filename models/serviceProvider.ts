import mongoose from 'mongoose';

const SProviderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  imageUrl: { type: String },
  avaialableTimes: [
    {
      day: { type: String },
      time: { type: String },
    },
  ],
  about: { type: String },
  examples: { type: Array },
  address: {
    governorate: { type: String },
    details: { type: String },
    location: {
      longitude: Number,
      latitude: Number,
    },
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'review' }],
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'service' }],
});

const ServiceProvider = mongoose.model('service_provider', SProviderSchema);

export default ServiceProvider;
