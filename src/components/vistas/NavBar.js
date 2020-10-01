import react from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

function NavBar (){

  return (<Navbar expand="lg">
  <Navbar.Brand href="/">Tutorial</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Form className="form-center">
    <FormControl type="text" placeholder="Search" className="" />
  </Form>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
      <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>);
}

export default NavBar;

    