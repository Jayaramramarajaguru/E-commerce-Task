// backend/server.js
require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
const { Server } = require("socket.io");

const { connectDB } = require("./configuration/db");

const app = express();
const server = http.createServer(app);
const cartRoutes = require("./routes/cartRoute");

// ✅ Socket setup
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://your-frontend.vercel.app"],
    methods: ["GET", "POST"],
  },
});

// ✅ Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// ✅ Routes (IMPORTANT FIX)
app.use("/api/auth", require("./routes/authroute"));
app.use("/api/products", require("./routes/productroutes"));
app.use("/api/users", require("./routes/userroute"));
app.use("/api/cart", cartRoutes);

// ✅ Test route (optional but useful)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Socket.io logic
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinCart", (userId) => {
    socket.join(`cart:${userId}`);
  });

  socket.on("cartUpdated", ({ userId, cart }) => {
    io.to(`cart:${userId}`).emit("cartUpdate", cart);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// ✅ Start server AFTER DB connects
const startServer = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await connectDB();

    console.log("MongoDB connected ✅");

    const PORT = process.env.PORT || 4000;

    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });
  } catch (error) {
    console.error("Server start error ❌:", error);
  }
};
startServer();