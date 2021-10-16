import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="light" variant="light">
                    <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} width="100%" height="60" className="d-inline-block align-top" alt=""/>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#pricing">Menu</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;