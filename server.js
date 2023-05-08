const express = require("express");
const connectDB = require ("./config/connectDB");
const user = require("./routes/user")

const app = express();

app.use(express.json());
app.use('/user',user);

connectDB();


app.listen(5000, (err) => 
err ? console.log(err) : console.log("Server is running on port 5000")
);
