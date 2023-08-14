//Hooks
import {  useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isOnline, setIsOnline] = useState(false); //Estado local
  const handleUserLogin = () => {
    setIsOnline(!isOnline);
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Tienda Daniel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mujer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hombres</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Unisex</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>{" "}
      <CartWidget />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "30px",
          cursor: "pointer",
        }}
        onClick={handleUserLogin}
      >
        <FontAwesomeIcon icon={faUser} />
        <h5>{isOnline ? "OnLine" : "OffLine"}</h5>
      </div>
    </Navbar>
  );
};

export default NavBar;
