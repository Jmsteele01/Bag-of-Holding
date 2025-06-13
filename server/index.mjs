// Imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./db/conn.mjs";
import itemRoutes from "./routes/itemRoutes.mjs";
import inventoryRoutes from "./routes/intentoryRoutes.mjs";

// Setups
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // cross origin resource sharing
app.use(morgan("tiny"));

function globalErr(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
}

app.use(express.json());

//Routes 
app.use('/api/items', itemRoutes);
app.use('/api/inventory', inventoryRoutes); 

// Err Middleware - only run when we have a server error
app.use(globalErr);

// listener
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
