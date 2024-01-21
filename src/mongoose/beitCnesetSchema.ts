import mongoose from 'mongoose';
import { userSchema } from './userSchema';

const TfilaSchema = new mongoose.Schema({
  tfila: { type: String, required: true },
  time: { type: String, required: true },
});

export const beitCnesetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  community: { type: String, required: true },
  image: { type: String, required: true },
  gabai: { type: userSchema, required: true },
  tfilot: { type: [TfilaSchema], required: true },
});
