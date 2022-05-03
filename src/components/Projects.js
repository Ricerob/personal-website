import React from "react";
import './styles/shared.css';
import './styles/projects.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

function Projects() {
    return (
        <Container fluid className="flex-wrapper px-0">
            <Container fluid className="blurb-container">
                <Row>
                    <Col>
                    <h3>Code</h3>
                    </Col>
                </Row>
            </Container>
            <Container className="github-cards-container">
                <Row>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top"/>
                            <Card.Body>
                                <Card.Title>Twitch Clip Grabber</Card.Title>
                                <Card.Text>
                                Python Script that interfaces with a web scraper to grab and download
                                Twitch Clips.
                                </Card.Text>
                                <a href="https://github.com/Ricerob/twitchClipGrabber"target="_blank" rel="noreferrer noopener" >
                                    <Button variant="Success">GitHub</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;