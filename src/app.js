import express from "express";
import morgan from "morgan";

// router
import router from "./routes/routes";

const app = express();

app.use(express.json()); // Para analizar solicitudes con formato JSON
app.use(express.urlencoded({ extended: true })); // Para analizar solicitudes con datos de formulario

//puerto
app.set("port", 4000);
//middlewares
app.use(morgan("dev"));

//Routes
app.use("/api/Juego", router);
export default app;
