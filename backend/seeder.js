import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";

dotenv.config();

// Validate required environment variables
if (!process.env.MONGO_URL) {
  console.error("MONGO_URL environment variable is required");
  process.exit(1);
}

// Validation function for data
const validateData = (model, data) => {
  return data.every((item) => {
    const doc = new model(item);
    return doc.validateSync() === undefined;
  });
};

// Database connection function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected for seeding");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

// Helper function to clear collections
const clearCollections = async () => {
  await Promise.all([
    User.deleteMany({}),
    Product.deleteMany({}),
    ProductStat.deleteMany({}),
    Transaction.deleteMany({}),
    OverallStat.deleteMany({}),
    AffiliateStat.deleteMany({}),
  ]);
  console.log("Database cleared");
};

// Helper function to seed a collection
const seedCollection = async (model, data, name) => {
  if (!validateData(model, data)) {
    throw new Error(`Invalid ${name} data`);
  }
  const result = await model.insertMany(data);
  console.log(`Inserted ${result.length} ${name}`);
  return result;
};

// Main seeding function
const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await clearCollections();

    // Seed all collections with validation and parallel processing where possible
    await Promise.all([
      seedCollection(User, dataUser, "users"),
      seedCollection(Product, dataProduct, "products"),
      seedCollection(ProductStat, dataProductStat, "product stats"),
      seedCollection(Transaction, dataTransaction, "transactions"),
      seedCollection(OverallStat, dataOverallStat, "overall stats"),
      seedCollection(AffiliateStat, dataAffiliateStat, "affiliate stats"),
    ]);

    console.log("All data seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error.message);
    if (error.errors) {
      console.error("Validation errors:", error.errors);
    }
    throw error;
  } finally {
    await mongoose.disconnect();
    console.log("Database connection closed");
  }
};

// Execute seeding with proper error handling
seedDatabase()
  .then(() => {
    console.log("Seeding completed successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Fatal error during seeding:", error);
    process.exit(1);
  });
