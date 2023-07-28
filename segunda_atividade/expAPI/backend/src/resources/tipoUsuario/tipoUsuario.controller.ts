import { Request, Response } from "express";
import { listTiposUsuarios } from "./tipoUsuario.service";

const index = async (req: Request, res: Response) =>{
    try{
        const tiposUsuarios = await listTiposUsuarios();
        res.status(200).json(tiposUsuarios);
    }catch(e){
        res.status(500).json(e);
    }

}

export default {index}