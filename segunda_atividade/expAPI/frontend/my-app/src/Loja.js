import React, { Component } from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Loja Virtual
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Signup
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Produtos
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#1">
                    Cadastrar
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#2">
                    Editar
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#3">
                    Deletar
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Body = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <form className="d-flex w-100 my-2" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Pesquisa LojaVirtual.com.br"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Pesquisar
          </button>
        </form>
      </div>
    </nav>
  );
};


const Cards = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card text-center">
          <img className="card-img-top img-fluid"  src="https://m.media-amazon.com/images/I/619x9jJRYIL._AC_SX522_.jpg" alt="Card image cap" style={{ width: '35%', margin: '0 auto' }} />
          <div className="card-body">
            <h5 className="card-title">Monitor Gamer AOC SPEED</h5>
            <p className="card-text">Monitor</p>
            <a href="#" className="btn btn-primary">
              R$719,00
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card text-center">
        <img className="card-img-top img-fluid"  src="https://m.media-amazon.com/images/I/61vkHhZDOKL._AC_SL1000_.jpg" alt="Card image cap" style={{ width: '35%', margin: '0 auto' }} />
          <div className="card-body">
            <h5 className="card-title">Monitor Portátil Touch 15.6</h5>
            <p className="card-text">Monitor Infantil</p>
            <a href="#" className="btn btn-primary">
              R$ 2.599,00
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card text-center">
        <img className="card-img-top img-fluid"  src="https://m.media-amazon.com/images/I/71X2TNdCy+L._AC_SL1500_.jpg" alt="Card image cap" style={{ width: '45%', margin: '0 auto' }} />
          <div className="card-body">
            <h5 className="card-title">Teclado sem fio Logitech MX Keys Mini</h5>
            <p className="card-text">Teclado</p>
            <a href="#" className="btn btn-primary">
              R$ 545,00
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card text-center">
        <img className="card-img-top img-fluid"  src="https://m.media-amazon.com/images/I/61Vs0otp73L._AC_SL1500_.jpg" alt="Card image cap" style={{ width: '45%', margin: '0 auto' }} />
          <div className="card-body">
            <h5 className="card-title">Logitech K380 - Teclado sem fio</h5>
            <p className="card-text">Teclado</p>
            <a href="#" className="btn btn-primary">
              R$ 500,00
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card text-center">
          <img className="card-img-top img-fluid"  src="https://m.media-amazon.com/images/I/51mx8136upL._AC_SX679_.jpg" alt="Card image cap" style={{ width: '39%', margin: '0 auto' }} />
          <div className="card-body">
            <h5 className="card-title">Notebook ASUS</h5>
            <p className="card-text">Notebook</p>
            <a href="#" className="btn btn-primary">
              R$3.157,00
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card text-center">
        <img className="card-img-top img-fluid"  src="https://m.media-amazon.com/images/I/51zi9pxWIAL._AC_SX522_.jpg" alt="Card image cap" style={{ width: '35%', margin: '0 auto' }} />
          <div className="card-body">
            <h5 className="card-title">ASUS Notebook Intel Core i7</h5>
            <p className="card-text">Notebook</p>
            <a href="#" className="btn btn-primary">
              R$4.299,00
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

class Loja extends Component {
  render() {
    return (
      <table className="table">
        <Header />
        <Body />
        <Cards />
      </table>
    );
  }
}
export default Loja;
