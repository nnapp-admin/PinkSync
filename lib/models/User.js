import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  ageGroup: { type: String, required: true },
  cityLocation: { type: String, required: true },
  forWhom: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);