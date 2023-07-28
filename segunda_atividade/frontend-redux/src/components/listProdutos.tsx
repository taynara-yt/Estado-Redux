import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
} from "reactstrap";
import { addProduto } from "../redux/slices/carrinho.slice";
import { RootState } from "../redux/store";

export default function ProdutosList() {
  const dispatch = useDispatch();

  const { produtos } = useSelector((state: RootState) => state.apiProduto);
  const { isAdmin } = useSelector((state: RootState) => state.apiLogin);

  function inserirCarrinho(nome: string, preco: number) {
    dispatch(addProduto({ nome, preco }));
  }

  if (isAdmin) {
    return (
      <Table className="table table-responsive table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col">Estoque</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={produto.id}>
              <th scope="row">{index + 1}</th>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco}</td>
              <td>{produto.estoque}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  return (
    <Row>
      {produtos.map((produto) => (
        <Col key={produto.id} md="4" className="mb-4">
          <Card>
            <CardHeader tag="h5">{produto.nome}</CardHeader>
            <CardBody>
              <CardTitle tag="h6">Preço: R$ {produto.preco}</CardTitle>
              <p>Estoque: {produto.estoque}</p>
            </CardBody>
            <CardFooter>
              <Button
                color="primary"
                onClick={() => {
                  inserirCarrinho(produto.nome, produto.preco);
                }}
              >
                Inserir no Carrinho
              </Button>
            </CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
