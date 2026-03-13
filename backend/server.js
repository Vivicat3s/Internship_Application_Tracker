const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

/* MONGODB CONNECTION */

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
console.log("MongoDB Atlas Connected")
})
.catch((err)=>{
console.log("MongoDB Connection Error:",err)
})


/* ROUTES */

const authRoutes = require("./routes/auth")
const internshipRoutes = require("./routes/internships")

app.use("/api",authRoutes)
app.use("/api/internships",internshipRoutes)


app.listen(process.env.PORT || 5000,()=>{
console.log("Server running on port 5000")
})