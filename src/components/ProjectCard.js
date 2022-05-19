import React from "react";
import { Card, Button, Container, Col, Row} from "react-bootstrap";

const ProjectCard = ({ picture, title, text, githubLink, tech}) => {
    return(
        <Card style={{width: '18rem'}} className="mb-1">
            <Card.Img variant="top"/>
                <Card.Body className="card-body">
                    <Row className="justify-content-center">
                        <Col md="auto">
                        <Card.Img variant="top" src={picture} style={{maxHeight: 180, maxWidth: "min-content"}}/>
                        </Col>
                    </Row>
                    <Card.Title className="pt-2">{title}</Card.Title>
                    <Card.Subtitle style={{fontSize: "0.9rem"}}>{tech}</Card.Subtitle>
                    <Card.Text>{text}</Card.Text>
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="auto">
                                <a href={githubLink} target="_blank" rel="noreferrer">
                                <Button variant="success"className="button-bootstrap" size="lg">GitHub</Button>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                    
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;