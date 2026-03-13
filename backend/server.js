const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()


app.use(cors({
origin: "https://internship-application-tracker-s77y.vercel.app"
}))
app.use(express.json())

/* MONGODB CONNECTION */

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
console.log("MongoDB Atlas Connected")
})
.catch((err)=>{
console.log("MongoDB Connection Error:",err)
})

app.get("/", (req, res) => {
  res.send("InternTrack API is running 🚀");
});


/* ROUTES */

const authRoutes = require("./routes/auth")
const internshipRoutes = require("./routes/internships")

app.use("/api",authRoutes)
app.use("/api/internships",internshipRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

