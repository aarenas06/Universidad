import { Router } from "express";
import { methods as JuegoController } from "../controller/JuegoController";
const router = Router();

router.get("/getPlayer", JuegoController.getPlayer);
router.post("/Responde", JuegoController.RespondeList);
router.get("/getPreguntas", JuegoController.getPreguntas);

export default router;
