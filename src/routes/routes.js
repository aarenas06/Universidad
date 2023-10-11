import { Router } from "express";
import { methods as JuegoController } from "../controller/JuegoController";
const router = Router();

router.get("/Players", JuegoController.getPlayer);
router.get("/Aspectos", JuegoController.getPlayer);
router.get("/Preguntas", JuegoController.getPlayer);
router.get("/Asignaciones", JuegoController.getPlayer);

export default router;
