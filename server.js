const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();

// Set up Server
const app = express();
// cors = Cross-Origin-Resource-Sharing
// cors is used when deploying apps from multiple repos, I may remove it later
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
console.log("server starting..."),
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));

// Set up routes
app.use("/posts", require("./src/routes/postRoutes"));

// Set up mongoose

console.log("Connecting to MongoDB");
mongoose.connect(process.env.MONGODB_URI, 
    {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) return console.error(err);
    console.log("MongoDB connection established");
});
