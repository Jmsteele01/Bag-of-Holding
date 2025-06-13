import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  rarity: { type: String, required: true },
  description: String
});

const Item = mongoose.model('Item', ItemSchema);

export default Item; 