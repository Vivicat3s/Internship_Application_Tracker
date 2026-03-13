const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* =========================
   CORS CONFIGURATION
========================= */

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://internship-application-tracker-s77y.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());

/* =========================
   ROOT ROUTE (Health Check)
========================= */

app.get("/", (req, res) => {
  res.send("InternTrack API is running 🚀");
});

/* =========================
   MONGODB CONNECTION
========================= */

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000
})
.then(() => {
  console.log("MongoDB Atlas Connected");
})
.catch((err) => {
  console.log("MongoDB Connection Error:", err);
});

/* =========================
   ROUTES
========================= */

const authRoutes = require("./routes/auth");
const internshipRoutes = require("./routes/internships");

app.use("/api", authRoutes);
app.use("/api/internships", internshipRoutes);

/* =========================
   SERVER START
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});