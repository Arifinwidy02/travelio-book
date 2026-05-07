import mongoose, { Schema, model, models } from 'mongoose';

const WishlistSchema = new Schema({
  bookId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  authors: [String],
  thumbnail: String,
  rating: { type: Number, default: 0 },
}, { timestamps: true });

export const Wishlist = models.Wishlist || model('Wishlist', WishlistSchema);