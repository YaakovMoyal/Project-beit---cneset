import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  name: { type: String, require },
  managementOf: { type: String, require },
  email: { type: String, require },
  password: { type: String, require },
  phone: { type: String, require },
});
