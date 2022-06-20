import React from "react";
import './style.scss';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
const Header = () => {
    return (<header className="container">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React Practice</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Link to='/class'>Class Component</Link>
        <Link to ='/counter'>Counter</Link>
      <NavDropdown title="Other Pages" id="collasible-nav-dropdown">
        <NavDropdown.Item><Link to ='/api'>API</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to ='/modal'>Modal</Link></NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </header>)
}
export default Header;