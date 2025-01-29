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

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => console.log(err));

const seedDatabase = async () => {
  try {
    await User.deleteMany({});
    await Product.deleteMany({});
    await ProductStat.deleteMany({});
    await Transaction.deleteMany({});
    await OverallStat.deleteMany({});
    await AffiliateStat.deleteMany({});
    console.log("Database cleared");

    await User.insertMany(dataUser);
    await Product.insertMany(dataProduct);
    await ProductStat.insertMany(dataProductStat);
    await Transaction.insertMany(dataTransaction);
    await OverallStat.insertMany(dataOverallStat);
    await AffiliateStat.insertMany(dataAffiliateStat);
    console.log("Data seeded successfully");

    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
