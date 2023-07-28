import mongoose from 'mongoose';

const serviceOrderSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'service',
    required: true,
  },
  estimatedTime: { type: Number, required: true },
  budget: { type: Number, required: true },
  availabeTime: {
    from: { type: Date },
    to: { type: Date },
  },
  providers: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'service_provider' },
  ],
});

const ServiceOrder = mongoose.model('service_order', serviceOrderSchema);

export default ServiceOrder;
