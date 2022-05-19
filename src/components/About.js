import React from "react";
import './styles/shared.css';
import './styles/about.css';
import {Container, Row, Col, Image} from 'react-bootstrap'
import LazyHero from "react-lazy-hero/lib/LazyHero";

function About() {
    return (
        <Container fluid className="flex-wrapper px-0">
            <Container fluid id="hero-container">
                <Row>
                    <LazyHero imageSrc="/ISU.jpg" color="#FFE8D6" opacity={0.25}
                        transitionDuration={800} transitionTimingFunction="ease-in-out"
                        parallaxOffset={10}
                        />
                </Row>
            </Container>
            <Container fluid style={{backgroundColor: "#B7B7A4"}}>
                <Row className="px-5 py-3">
                    <Col className="text-start">
                    <h3>About Me</h3>
                    <p>I'm Robby, a student majoring in Software Engineering and German. I'm located in the Des Moines area.
                        In my free time I like learning languages, working out, learning new recipes, and taking care of my plants.<br/><br/>
                        I started coding around 2019, the start of my college years. After a few rough bouts with C, I came out on top and saw how cool programming can be.
                    </p>
                    </Col>
                    <Col sm lg="2" className="d-none d-lg-block">
                        <Image id="about-me" rounded src="/about-me.JPG"></Image>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="px-5 py-3">
                    <Col sm lg="3" className="d-xs-none">
                        <Image id="tech-selfie" rounded src="/tech-selfie.jpg"></Image>
                    </Col>
                    <Col className="text-end">
                        <h3>Tech</h3>
                        <p>Currently, I'm interested in learning many things. I have plans to learn machine learning and love learning as much
                        as I can about blockchain technology. I also like front-end - React is my favorite framework for building front-ends.
                        I also have experience in Python, Solidity, Java, C, SQL, and assembly.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{backgroundColor: "#CB997E"}}>
                <Row className="px-5 py-3">
                    <Col className="text-start">
                    <h3>Language</h3>
                        <p>I am a native English speaker, raised in the US. I also started learning German in high school and have continued by studies ever since. I hope to pick up the Vienna or the Bayern dialect.
                        I'm also starting to learning Spanish (Mexican dialect) to hopefully become conversational and consume media in Spanish.
                        In the future, I'd love to pick up various other languages, such as Mandarin, Icelandic, and Hindi. <br/><br/>
                        Naturally, I'd love to combine my langauge and tech passions to learn about natural language processing and applied linguistics. I find the most innovative and interestings things in tech happen
                        at the crossroads of seperate disciplines!
                        </p>
                    </Col>
                    <Col sm lg="2" className="d-none d-lg-block">
                        <Image id="about-me" rounded src="/berlin.jpg"></Image>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default About;