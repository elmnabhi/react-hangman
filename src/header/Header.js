import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
     

const Header = () => (
    <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">ActiveIT</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Sfeir</Nav.Link>
          </Nav>
    </Navbar>
);


export default Header