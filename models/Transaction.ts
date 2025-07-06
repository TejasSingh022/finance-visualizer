import mongoose, { Schema, models } from 'mongoose';

const TransactionSchema = new Schema({
  amount: { type: Number, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

export default models.Transaction || mongoose.model('Transaction', TransactionSchema); 