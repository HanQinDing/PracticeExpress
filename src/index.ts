import express from "express";
import employeeRoutes from "./router/employeeRoute"


const app = express();
app.use(express.json());

app.use("/employee", employeeRoutes);

app.listen(3000, ()=>{
    console.log("lesgo");
})