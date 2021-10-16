import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as = {Link} to="/"><img src={logo} width="100%" height="60" className="d-inline-block align-top" alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as ={Link} to ="/home">Home</Nav.Link>
                            <Nav.Link as = {Link} to="/about">About</Nav.Link>
                            <Nav.Link as ={Link} to="/menu">Menu</Nav.Link>
                            <Nav.Link as ={Link} to="/contact">Contact</Nav.Link>  
                        </Nav>

                        <Nav>
                            <Nav.Link href="/">Cart</Nav.Link>
                            <Nav.Link eventKey={2} href="/">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
