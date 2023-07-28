import { ListGroup, ListGroupItem } from "reactstrap";
import NavBarCustom from "../../components/navbar";
import { RootState } from "../../redux/store";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { remove, incrementar, decrementar} from "../../redux/slices/carrinho.slice";

export default function Carrinho() {
  const produtosNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.produtos
  );

  const dispatch = useDispatch();

  return (
    <div className="containerCart">
      <div style={{ width: "70%" }}>
        <NavBarCustom />
      </div>
      <table className="table table-responsive table-bordered table-custom">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Produto</th>
            <th scope="col">Preço Unitário</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Preço Total</th>
            <th scope="col">Remover</th>
          </tr>
        </thead>
        <tbody>
        {produtosNoCarrinho.map((produto, index) => (
            <tr key={produto.nome}>
              <th scope="row">{index + 1}</th>
              <td>{produto.nome}</td>
              <td>{`R$ ${produto.preco.toFixed(2)}`}</td>
              <td className="quantity-buttons">
                <button onClick={() => dispatch(decrementar({ nome: produto.nome }))}>-</button>
                {produto.quantidade}
                <button onClick={() => dispatch(incrementar({ nome: produto.nome }))}>+</button>
              </td>
              <td>{`R$ ${(produto.preco * produto.quantidade).toFixed(2)}`}</td>
              <td className="remove-button">
                <button onClick={() => dispatch(remove({ nome: produto.nome }))}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}