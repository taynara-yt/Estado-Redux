import { Request, Response } from 'express';
import {
  getAllProdutos,
  buscaProdutoPorNome, //ADICIONADO DO CODIGO PROF DOUGLAS
  createProduto,
  readProduto,
  updateProduto,
  removeProduto
} from './produto.service';
import { CreateProdutoDto, UpdateProdutoDto } from './produto.types';

const index = async (req: Request, res: Response) => { //listar produtos
  try {
    const produtos = await getAllProdutos();
    res.status(200).json(produtos); //200 p/ ok
  } catch (e) {
    res.status(500).json(e); //500 p/ error
  }
};

const create = async (req: Request, res: Response) => {
   const produto: CreateProdutoDto = req.body; // ou const {nome, preco, estoque} = req.body;
  try {
    //ADICIONADO DO CODIGO PROF DOUGLAS
    if (await buscaProdutoPorNome(produto.nome))
    return res.status(400).json({ message: 'Produto já existe' });

    const newProduto = await createProduto(produto);
    res.status(201).json(newProduto); // 201: created
  } catch (e) {
    res.status(500).json(e);
  }
};

const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  //const produto = req.body as UpdateProdutoDto; // o
  try {
    const produto = await readProduto(id);
    if (produto === null) res.status(400).json({ msg: 'Produto não existe' });
    else res.status(200).json(produto);
  } catch (e) {
    res.status(500).json(e);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const produto = req.body;
  try {
    const result = await updateProduto(id, produto);
    if (result === null)
      res.status(400).json({ msg: 'Produto não encontrado' });
    else res.status(200).json({ msg: 'Produto atualizado' });
  } catch (e) {
    res.status(500).json(e);
  }
};

const remove = async (req: Request, res: Response) => {
   const { id } = req.params;
   try{
    const removed = await removeProduto(id);
    if(removed) return res.status(200).json({msg: 'O produto foi removido com sucesso!'})
      res.status(400).json({msg: 'Não existe produto com o id informado'})
   }catch(e){
    res.status(500).json(e);
   }
};

export default { index, create, read, update, remove };
