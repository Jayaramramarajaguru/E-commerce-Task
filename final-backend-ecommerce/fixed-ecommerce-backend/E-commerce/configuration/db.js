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

module.exports = connectDB;