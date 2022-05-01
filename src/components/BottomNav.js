import React from "react";
import './styles/navbar.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Twitter, Github } from 'react-bootstrap-icons';

const BottomNav = () => {
    return (
        <Navbar sticky="bottom" className="py-0">
            <Container fluid className="justify-content-end">
                <Nav>
                    <Link to="https://twitter.com/rehbudev" className="nav-link"><Twitter width="30" height="30"/></Link>
                    <Link to="https://github.com/Ricerob" className="nav-link"><Github width="30" height="30"/></Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default BottomNav;