/*import { Request, Response, NextFunction } from 'express';
import { TiposUsuarios } from '../resources/tipoUsuario/tipoUsuario.constants';

const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.tipoUsuarioId === TiposUsuarios.ADMIN) next();
  else res.status(401).json({ msg: 'Operação não permitida' });
};

export default checkAdmin;*/

//ADICIONADO DO CODIGO PROF DOUGLAS
import { Request, Response, NextFunction } from 'express';
import { checkIsAdmin } from '../resources/auth/auth.service';

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  if (req.session.uid && (await checkIsAdmin(req.session.uid))) next();
  else res.status(403).json({ msg: 'Não autorizado' });
};

export default isAdmin;