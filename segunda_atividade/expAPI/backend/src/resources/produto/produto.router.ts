import { Router } from 'express';
import produtoController from './produto.controller';
//import checkAdmin from '../../middlewares/isAdmin';
import isAdmin from '../../middlewares/isAdmin';

const router = Router();

router.get('/', produtoController.index);
router.post('/', isAdmin, produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', isAdmin, produtoController.update);
router.delete('/:id', isAdmin, produtoController.remove); //alterado checkAdmin por isAdmin 

export default router;
