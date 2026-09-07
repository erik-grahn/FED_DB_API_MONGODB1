import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
});

export default mongoose.model("categories", CategorySchema);
