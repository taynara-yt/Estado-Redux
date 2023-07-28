/*import { Request, Response, NextFunction } from 'express';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.uid) next();
  else res.status(401).json({ msg: 'O Usuário não está logado' });
};

export default checkAuth;*/

import { Request, Response, NextFunction } from 'express';

const isLogged = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.uid) next();
  else res.status(401).json({ msg: 'Não logado' });
};

export default isLogged;
