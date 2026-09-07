import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },
  ],
});

export default mongoose.model("products", ProductSchema);
