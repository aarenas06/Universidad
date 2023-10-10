import express from "express";
import morgan from "morgan";

// router
import router from "./routes/routes";

const app = express();
//puerto
app.set("port", 4000);
//middlewares
app.use(morgan("dev"));

//Routes
app.use("/api/Juego", router);
export default app;
