import { createSlice } from "@reduxjs/toolkit";

export const carrinhoSlice = createSlice({
  name: "carrinhoSlice",
  initialState: {
    produtos: [] as { nome: string; preco: number; quantidade: number }[],
  },
  reducers: {
    addProduto(state, action) {
      const { nome, preco } = action.payload;
      
      const existingProductIndex = state.produtos.findIndex(
        (produto) => produto.nome === nome
      );

      if (existingProductIndex !== -1) {
        state.produtos[existingProductIndex].quantidade++;
      } else {
        state.produtos.push({ nome, preco, quantidade: 1 });
      }
    },


    remove(state, action) {
      const { nome } = action.payload;
      const existingProductIndex = state.produtos.findIndex(
        (produto) => produto.nome === nome
      );

      if (existingProductIndex !== -1) {
        if (state.produtos[existingProductIndex].quantidade > 1) {
          state.produtos[existingProductIndex].quantidade--;
        } else {
          state.produtos.splice(existingProductIndex, 1);
        }
      }
    },

    incrementar(state, action) {
      const { nome } = action.payload;
      const existingProduct = state.produtos.find(
        (produto) => produto.nome === nome
      );

      if (existingProduct) {
        existingProduct.quantidade++;
      }
    },
    decrementar(state, action) {
      const { nome } = action.payload;
      const existingProduct = state.produtos.find(
        (produto) => produto.nome === nome
      );

      if (existingProduct && existingProduct.quantidade > 1) {
        existingProduct.quantidade--;
      }
    },
  },
});

export const {
  addProduto,
  remove,
  incrementar,
  decrementar,
} = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
