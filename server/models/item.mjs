import mongoose from "mongoose";

const InventoryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  rarity: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  description: String
});

const Item = mongoose.model('Item', InventoryItemSchema);

export default Item; 