import { Router } from "express";
import { methods as JuegoController } from "../controller/JuegoController";
const router = Router();

router.get("/", JuegoController.getPlayer);
export default router;
