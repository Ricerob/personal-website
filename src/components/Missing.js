import React from "react";
import './styles/shared.css';
import './styles/missing.css';
import { Container, Button } from "react-bootstrap";

function Missing() {
    return (
        <Container fluid className="flex-wrapper">
            <h3>404!</h3>
            <Button href="/">Back to safety!</Button>
        </Container>
    );
}

export default Missing;