import React from "react";
import './styles/shared.css';
import './styles/projects.css';
import {Container, Row, Col } from 'react-bootstrap';
import ProjectCard from "./ProjectCard";

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
                        <ProjectCard picture="python.png" title="Twitch Clip Grabber"
                        text="Python Script that interfaces with a web scraper to grab and download
                        Twitch Clips." githubLink="https://github.com/Ricerob/twitchClipGrabber"/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;