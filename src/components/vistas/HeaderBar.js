import React from "react";
import { Link } from "react-router-dom";

import {
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "./style.scss";
import "./estilo.scss";
// get our fontawesome imports
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faPinterest,
  faWhatsapp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function HeaderBar() {
  return (
    <div className="header-bar">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/home"> Home </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login"> Login </Link>
            </Nav.Link>

            <NavDropdown title="Accesos" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/calendario"> Calendario </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/hipoteca"> Hipoteca</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/wheather"> Wheather </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="custom">
            <ul className="social-icons">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/pperllamarrina1"
                  target="_blank"
                >
                  {" "}
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://twitter.com/Ambar_de_PHP"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.pinterest.com.mx/pperllamarrina1/_saved/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faPinterest} size="2x" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://web.whatsapp.com/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/AmbarPHP"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://keep.google.com/u/0/"
                >
                  <FontAwesomeIcon icon={faGoogle} size="2x" />
                </a>
              </li>
            </ul>
          </div>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderBar;
