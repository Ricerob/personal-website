import React from "react";
import './styles/shared.css';
import './styles/about.css';
import {Container, Row, Col} from 'react-bootstrap'

function About() {
    return (
        <Container fluid className="flex-wrapper px-0">
            <Container fluid>
            <Row>
                <Col>
                <h3>READ ALL ABOUT IT!</h3>
                </Col>
            </Row>
            </Container>
        </Container>
    );
}

export default About;