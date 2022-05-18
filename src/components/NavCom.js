import React from "react";
import './styles/navbar.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavCom = () => {
    return (
        <Navbar sticky="top" className="py-0" style={{backgroundColor: "#B7B7A4"}}>
            <Container fluid className="justify-content-md-center">
                <Nav>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavCom;