import { Router } from "express";
import Controller from "./controller";

const router = Router();
const controller = new Controller();

router.get("/manifest", controller.manifest);

router.get("/", controller.index);

export default router;
