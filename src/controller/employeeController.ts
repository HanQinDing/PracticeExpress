
import {Request, Response} from "express"
import { GetAllEmployeeParams, GetAllEmployeeQuery } from "../dto/employeeDTO";

export const employeeController = {
    getAll(req : Request, res: Response) {
        console.log(req.params.employeeID);

        res.json("ttt");
    },

    getTest(req : Request<GetAllEmployeeParams,{} , {},GetAllEmployeeQuery>, res: Response) {
        res.status(404).json("NIGGA");
    },

    postTest(req : Request, res: Response) {
        res.status(200).json(req.params.tt);
    },
}