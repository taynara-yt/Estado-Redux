import { Usuario } from "../../models/Usuario";

export type LoginDto = Pick<Usuario, 'email' | 'senha'>;

//ADICIONADO DO CODIGO PROF DOUGLAS
export type SignUpDto = Pick<Usuario, 'nome' | 'email' | 'senha'>;