import { Usuario } from "../../models/Usuario";

export type CreateUsuarioDto = Pick<Usuario, 'nome' | 'email' | 'senha' | 'tipoUsuarioId'>;

export type UpdateUsuarioDto = Pick<Usuario, 'nome' | 'email' | 'senha' | 'tipoUsuarioId'>;

//ADICIONADO DO CODIGO PROF DOUGLAS
export type UsuarioDto = Omit<Usuario, 'senha'>;