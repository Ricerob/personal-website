import React from "react";
import './styles/navbar.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Twitter, Github } from 'react-bootstrap-icons';

const BottomNav = () => {
    return (
        <Navbar sticky="bottom" className="py-0">
            <Container fluid className="justify-content-end">
                <Nav>
                    <a href="https://twitter.com/rehbudev" target="_blank" rel="noreferrer noopener" className="nav-link"><Twitter width="30" height="30"/></a>
                    <a href="https://github.com/Ricerob" target="_blank" rel="noreferrer noopener" className="nav-link"><Github width="30" height="30"/></a>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default BottomNav;