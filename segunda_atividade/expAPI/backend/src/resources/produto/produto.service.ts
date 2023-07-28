import { Produto } from '../../models/Produto'; //modelo Produto
import { CreateProdutoDto, UpdateProdutoDto } from './produto.types';

export const getAllProdutos = async (): Promise<Produto[]> => { //lisProdutos
  const produtos = await Produto.findAll();
  return produtos.map((p) => p.toJSON());
};

export const createProduto = async (
  produto: CreateProdutoDto,
): Promise<Produto> => {
  return await Produto.create(produto);
};

export const readProduto = async (id: string): Promise<Produto | null> => {
  const produto = await Produto.findOne({ where: { id } });
  return produto ? produto.toJSON() : null;
};

export const updateProduto = async ( 
  id: string,
  produto: UpdateProdutoDto,
): Promise<number | null> => {
  const prod = await readProduto(id);
  if (prod === null) return null;

  const [affectCount] = await Produto.update(produto, { where: { id } });
  return affectCount;
};

//ADICIONADO DO CODIGO PROF DOUGLAS
export const buscaProdutoPorNome = async (
  nome: string,
): Promise<Produto | null> => {
  return await Produto.findOne({ where: { nome } });
};


export const removeProduto = async (id: string): Promise<boolean> => {
  const produtosApagados = await Produto.destroy({where: {id}});
  return !!produtosApagados;
}