const express = require("express");
const routes = require("./routes");
const cors = require("cors");

require("dotenv").config();

const app = express(); // Declara app aquí
// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8081");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api", routes);

const port = 4000;

app.listen(port, () => console.log(`API is running on port${port}`));
