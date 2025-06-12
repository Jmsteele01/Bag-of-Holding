import express from "express";
import Item from "../models/item.mjs"

const router = express.Router();

// GET all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// POST a new item
router.post('/', async (req, res) => {
  const newItem = new Item(req.body);
  const savedItem = await newItem.save();
  res.json(savedItem);
});

// PUT (update) an item
router.put('/:id', async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
});

// DELETE an item
router.delete('/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
});

export default router;
