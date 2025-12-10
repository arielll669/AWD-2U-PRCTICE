const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware para leer JSON del body
app.use(express.json());

// ================================
// Conexión a MongoDB (tu link)
// ================================
mongoose.connect("mongodb+srv://jeancarlo:jean12345@cluster0.3ixvnnj.mongodb.net/FastFoodApp?retryWrites=true&w=majority&appName=Cluster0");

const db = mongoose.connection;
db.on("error", (error) => console.error("Error al conectar:", error));
db.once("open", () => console.log("BocattoValley DB conectada correctamente!"));

// ================================
// Rutas
// ================================
const productRouter = require("./routes/productRoutes");
app.use("/bocattovalley", productRouter);

// ================================
// Servidor
// ================================
const port = 3014;
app.listen(port, () => console.log(`Servidor BocattoValley en puerto ${port}`));
