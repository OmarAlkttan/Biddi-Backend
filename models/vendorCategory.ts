import mongoose from 'mongoose';

const VCategorySchema = new mongoose.Schema({
  title: { type: String },
  type: { type: String },
});

const VendorCategory = mongoose.model('vendor_category', VCategorySchema);

export default VendorCategory;
