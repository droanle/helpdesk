const express = require("express");
const path = require("path");
const app = express();

// Environment Variables
const dotenv = require("dotenv");

dotenv.config();

const OperationPort = process.env.SISTEM_PORT || 3000;

// DataBase
const mongoose = require("mongoose");
const credentials = require("./src/configs/credentials");

mongoose.set("strictQuery", true);
global.db = mongoose.connect(
  `mongodb+srv://${credentials.USERNAME}:${credentials.PASSWORD}@${credentials.HOST}/${credentials.DB}?retryWrites=true&w=majority`
);

// Use
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// Router
const routers = require("./src/routes/api.routers");

app.use("/", routers);

// Status 404 Scenario
app.use((req, res) => res.status(404).render("error404"));

// Start System
app.listen(OperationPort, () => {
  console.log(
    "Servidor ligado e disponivel em: http://localhost:" + OperationPort,
    "Para desligar o server, digite: ctrl + C"
  );
});
