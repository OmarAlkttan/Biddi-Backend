import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  subCategoty: { type: String },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'review' }],
  providers: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'service_provider' },
  ],
});

const Service = mongoose.model('service', serviceSchema);

export default Service;
