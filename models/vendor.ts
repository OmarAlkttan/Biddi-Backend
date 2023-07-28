import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String },
  description: { type: String },
  address: {
    governorate: { type: String },
    details: { type: String, required: true },
    location: { latitude: { type: Number }, longitude: { type: Number } },
    extraDetails: { type: String, required: true },
  },
  phone: { type: String },
  workingHours: [
    {
      day: { type: String },
      open: { type: Number, min: 0, max: 24 },
      close: { type: Number, min: 0, max: 24 },
    },
  ],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'review' }],
  avgRating: { type: Number, min: 0, max: 5 },
  sections: [String],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'vendor_category' },
});

const Vendor = mongoose.model('vendor', vendorSchema);

export default Vendor;
