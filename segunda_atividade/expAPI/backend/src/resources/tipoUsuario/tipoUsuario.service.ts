 import { TipoUsuario } from "../../models/TipoUsuario";

 export const listTiposUsuarios = async (): Promise <TipoUsuario[]> =>{
    const tiposUsuarios = await TipoUsuario.findAll();
    return tiposUsuarios.map((t) => t.toJSON());
 }