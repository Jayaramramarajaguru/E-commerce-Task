<<<<<<< HEAD
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting MongoDB...");

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "ecommerce",
      serverSelectionTimeoutMS: 30000,
      family: 4, // 🔥 fixes hotspot + DNS issue
    });

    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error("MongoDB error ❌:", err.message);
    process.exit(1);
  }
};

=======
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting MongoDB...");

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "ecommerce",
      serverSelectionTimeoutMS: 30000,
      family: 4, // 🔥 fixes hotspot + DNS issue
    });

    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error("MongoDB error ❌:", err.message);
    process.exit(1);
  }
};

>>>>>>> 4826aa4af46ba12daac8fab1faa11bf160fcfe2c
module.exports = connectDB;