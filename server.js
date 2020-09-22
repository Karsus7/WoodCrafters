const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
console.log("server starting..."),
app.listen(PORT, () => console.log('Server is running on port: 3000'));

// Set up routes
app.use("/posts", require("./src/routes/postRoutes"));

// Set up mongoose

console.log("Connecting to MongoDB");
mongoose.connect(process.env.MONGODB_URI, 
    {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) return console.error(err);
    console.log("MongoDB connection established");
});
