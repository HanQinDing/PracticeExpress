import { Router } from "express";
import { employeeController } from "../controller/employeeController";


const router = Router();

router.get("/",employeeController.getAll);
router.get("/test",employeeController.getTest);
router.post("/:tt",employeeController.postTest);


export default router