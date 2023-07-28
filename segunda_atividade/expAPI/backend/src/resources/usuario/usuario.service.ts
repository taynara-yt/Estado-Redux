import { Usuario } from "../../models/Usuario";
import bcrypt from 'bcryptjs';
import { CreateUsuarioDto, UsuarioDto, UpdateUsuarioDto} from "./usuario.types";

//ADICIONADO DO CODIGO PROF DOUGLAS
export const getAllUsuarios = async (): Promise<UsuarioDto[]> => {
  const usuarios = await Usuario.findAll({
    attributes: [
      'id',
      'tipoUsuarioId',
      'nome',
      'email',
      'createdAt',
      'updatedAt',
    ],
  });
  return usuarios.map((u) => u.toJSON());
};



export const createUsuario = async (
  usuario: CreateUsuarioDto,
  ): Promise<Usuario> => {
  const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS!, 10));
  const hash = await bcrypt.hash(usuario.senha, salt)
  const newUsuario = await Usuario.create({
    ... usuario, senha: hash});
    const newUsuarioSemSenha = newUsuario.toJSON();
    delete newUsuarioSemSenha ['senha'];
    return newUsuarioSemSenha;
}

export const readUsuario = async (id: string): Promise<Usuario | null> => {
  const usuario = await Usuario.findOne({ where: { id } });
  return usuario ? usuario.toJSON() : null;
};
    

  export const updateUsuario = async (
    id: string,
    usuario: UpdateUsuarioDto,
  ): Promise<number | null> => {
    const prod = await readUsuario(id);
    if (prod === null) return null;
  
    const [affectCount] = await Usuario.update(usuario, { where: { id } });
    return affectCount;
  };
  
  export const removeUsuario = async (id: string): Promise<boolean> => {
    const removeUsuario = await Usuario.destroy({ where: { id } });
    return !!removeUsuario;
  };

  //ADICIONADO DO CODIGO PROF DOUGLAS
export const buscaUsuarioPorEmail = async (
  email: string,
): Promise<UsuarioDto | null> => {
  return await Usuario.findOne({
    attributes: [
      'id',
      'tipoUsuarioId',
      'nome',
      'email',
      'createdAt',
      'updatedAt',
    ],
    where: { email },
  });
};

export const buscaUsuarioPorId = async (
  id: string,
): Promise<UsuarioDto | null> => {
  return await Usuario.findOne({
    attributes: [
      'id',
      'tipoUsuarioId',
      'nome',
      'email',
      'createdAt',
      'updatedAt',
    ],
    where: { id },
  });
};