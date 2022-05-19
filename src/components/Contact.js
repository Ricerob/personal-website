import React from "react";
import './styles/shared.css';
import './styles/contact.css';
import {Container, Row, Col, Card} from 'react-bootstrap'
import LazyHero from "react-lazy-hero/lib/LazyHero";
import {Envelope, Github, Twitter} from 'react-bootstrap-icons'

function Contact() {
    return (
        <Container fluid className="flex-wrapper px-0">
            <Container fluid id="hero-container">
                <Row>
                    <LazyHero imageSrc="/monstera.jpg" color="#FFE8D6" opacity={0.25}
                        transitionDuration={800} transitionTimingFunction="ease-in-out"
                        parallaxOffset={10}
                        />
                </Row>
            </Container>
            <Container fluid className="blurb-container pt-2">
                <Row>
                    <Col>
                    <h3>Contact Me</h3>
                    </Col>
                </Row>
                <br />
            </Container>
            <Container>
                <Row className="justify-content-center">
                    <Col />
                    <Col md="auto" className="px-5 text-center">
                    <p>You can find me on various platforms.</p>
                    <p>Feel free to reach out!</p>
                    </Col>
                    <Col />
                </Row>
            </Container>
            <Container className="github-cards-container px-5" style={{backgroundColor: "#6B705C"}}>
                <Row className="py-4 justify-content-around">
                    <Col md="auto">
                        <Card style={{width: "20rem"}}>
                            <Card.Title className="ps-3 mt-2"><Envelope width="26" height="26"></Envelope> E-Mail</Card.Title>
                            <Card.Subtitle className="ps-3 text-muted"><a className="no-dec" href="mailto:riceslif@gmail.com">riceslif@gmail.com</a></Card.Subtitle>
                            <Card.Body>E-Mail is the fastest way to reach me professionally.</Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto">
                        <Card style={{width: "20rem"}}>
                            <Card.Title className="ps-3 mt-2"><Twitter width="24" height="24"></Twitter> Twitter</Card.Title>
                            <Card.Subtitle className="ps-3 text-muted"><a className="no-dec" href="https://twitter.com/rehbudev">@rehbudev</a></Card.Subtitle>
                            <Card.Body>Twitter is another place to see what I'm up to - I tweet about tech, web3, and occasionally my other hobbies.</Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto">
                    <Card style={{width: "20rem"}}>
                            <Card.Title className="ps-3 mt-2"><Github width="26" height="26"></Github> E-Mail</Card.Title>
                            <Card.Subtitle className="ps-3 text-muted"><a className="no-dec" href="https://github.com/Ricerob">Ricerob</a></Card.Subtitle>
                            <Card.Body>While not a social platform, GitHub is a great place to see what I'm actually working on.</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;