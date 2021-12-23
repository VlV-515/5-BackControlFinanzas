const express = require("express");
const mongoose = require("mongoose");
const inRoutes = require("./routes/inRoutes");
require("dotenv").config();

const app = express();
const port = process.env.port || 3000;

//Conection DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a DB");
  })
  .catch(() => {
    console.error("Error: Conectando a DB");
  });

//Middleware
app.use(express.json());
app.use("/in", inRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Index-123");
});
//Listener
app.listen(port, () => {
  console.log("Server Listo");
});
