import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Item from './models/items.mjs'; // Adjust path if needed

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;


const defaultItems  = [
  { id: 1, name: "Potion of Healing", type: "Consumable", rarity: "Common" },
  { id: 2, name: "Longsword", type: "Weapon", rarity: "Common" },
  { id: 3, name: "Cloak of Elvenkind", type: "Wondrous Item", rarity: "Uncommon" },
  { id: 4, name: "Bag of Holding", type: "Wondrous Item", rarity: "Uncommon" },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Item.deleteMany(); // Optional: clears existing items
    const inserted = await Item.insertMany(defaultItems);
    console.log(`Seeded ${inserted.length} items.`);
    
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  }
};

seedDatabase();