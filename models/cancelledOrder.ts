import mongoose from 'mongoose';

const COrderSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'order' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  reason: { type: String, required: true },
  returnedItems: [
    {
      item: {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
        vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'vendor' },
        quantity: { type: Number },
        options: { type: Array },
      },
      reason: { type: String },
    },
  ],
});

const CancelledOrder = mongoose.model('cancelled_order', COrderSchema);

export default CancelledOrder;
