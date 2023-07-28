import React, { CSSProperties } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, NavbarBrand } from "reactstrap";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/api.slice.login";
import { NavItem, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function NavBarCustom() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const { isAdmin } = useSelector((state: RootState) => state.apiLogin);
  const { produtos } = useSelector((state: RootState) => state.carrinho);

  function Logout() {
    dispatch(logout());
    navigate("/");
  }

  const customStyle: CSSProperties= {
    position: "sticky",
    top: "0",
    backgroundColor: "#f2f2f2", 
    padding: "10px 20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px solid #e6b3cc", 
    color: "#616063", 
    fontFamily: "Arial, sans-serif", 
    fontSize: "18px", 
    borderRadius: "10px",
  };

  const iconStyle = {
    marginRight: "5px", 
  };
  return (
    <div>
      <Navbar className="navbar-custom" style={customStyle}>
        <NavbarBrand style={{ fontSize: "25px", fontWeight: "bold", color: "#616063" }}>Loja Online</NavbarBrand>

      


        <NavItem onClick={() => navigate("/home")}>
          <NavLink>Produtos</NavLink>
        </NavItem>

        {/* SE USUARIO ISADMIN MOSTRA OPÇÃO DO CARRINHO */}
        {!isAdmin ? (
          <NavItem 
          onClick={() => navigate("/cart")}
          >
            <NavLink>
              <FontAwesomeIcon icon={faShoppingCart} style={iconStyle} />
              Carrinho ({produtos.length})
            </NavLink>
          </NavItem>
        ) : null}

        <NavItem onClick={() => Logout()}>
          <NavLink>
            <FontAwesomeIcon icon={faSignOutAlt} style={iconStyle} />
            Logout
          </NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
}
