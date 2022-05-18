import React from "react";
import './styles/shared.css';
import './styles/projects.css';
import {Container, Row, Col } from 'react-bootstrap';
import ProjectCard from "./ProjectCard";
import LazyHero from "react-lazy-hero/lib/LazyHero";

function Projects() {
    return (
        <Container fluid className="flex-wrapper px-0">
            <Container fluid id="hero-container">
                <Row>
                    <LazyHero imageSrc="/room.jpg" color="#FFE8D6" opacity={0.25}
                        transitionDuration={800} transitionTimingFunction="ease-in-out"
                        parallaxOffset={10}
                        />
                </Row>
            </Container>
            <Container fluid className="blurb-container pt-2">
                <Row>
                    <Col>
                    <h3>Completed Projects</h3>
                    </Col>
                </Row>
                <br />
            </Container>
            <Container>
                <Row className="justify-content-center">
                    <Col />
                    <Col md="auto" className="px-5 text-center">
                    <p>Here's a quick preview of some of the projects I've completed in my free time.</p>
                    <p>This list will surely be updated as I complete more projects.</p>
                    </Col>
                    <Col />
                </Row>
            </Container>
            <Container className="github-cards-container px-5" style={{backgroundColor: "#6B705C"}}>
                <Row className="py-4 justify-content-around">
                    <Col md="auto" data-aos="fade-right">
                        <ProjectCard picture="Python-T.png" title="Twitch Clip Grabber"
                        text="Script that interfaces with a web scraper to grab and download
                        Twitch Clips." githubLink="https://github.com/Ricerob/twitchClipGrabber"
                        tech="Python"/>
                    </Col>
                    <Col md="auto" data-aos="fade-down">
                        <ProjectCard picture="hero2.jpg" title="Portfolio"
                        text="Curious as to how this site was built? Check here!"
                        githubLink="https://github.com/Ricerob/personal-website" 
                        tech="React, JavaScript, HTML, CSS"/>
                    </Col>
                    <Col md="auto" data-aos="fade-left">
                        <ProjectCard picture="react-native.png" title="Personal Website"
                        text="Simple app built to keep track of side pots in various games."
                        githubLink="https://github.com/Ricerob/sidepot" 
                        tech="React Native"/>
                    </Col>
                </Row>
                <Row className="justify-content-around p-4 ">
                    <Col md="auto" data-aos="fade-right">
                    <ProjectCard picture="eth.png" title="Ethereum Song Recommender"
                        text="dApp built using smart contracts. Powered by Buildspace.so."
                        githubLink="https://github.com/Ricerob/blockchain-spotify-recommender" 
                        tech="Solidity, Hardhat, React"/>
                    </Col>
                    <Col md="auto" data-aos="fade-left">
                    <ProjectCard picture="sun.png" title="Chromium Weather App"
                        text="Simple weather check using an API - built as a Chrome widget."
                        githubLink="https://github.com/Ricerob/weather-check" 
                        tech="JavaScript, HTML, WeatherAPI"/>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="blurb-container pt-2">
                <Row>
                    <Col>
                    <h3>In Progress/ Paused</h3>
                    </Col>
                </Row>
                <br />
            </Container>
            <Container>
                <Row className="justify-content-center">
                    <Col />
                    <Col md="auto" className="px-5 text-center">
                    <p>Like any other programmer, I've got some projects I never finished.</p>
                    <p>I'll show off a few here that had a decent code base built before departure!</p>
                    </Col>
                    <Col />
                </Row>
            </Container>
            <Container className="github-cards-container px-5" style={{backgroundColor: "#6B705C"}}>
                <Row className="justify-content-around p-4 ">
                    <Col md="auto" data-aos="fade-down">
                    <ProjectCard picture="ethcolor.png" title="leaf.io"
                        text="Lightweight dApp built from scratch to transfer ether from one wallet to another."
                        githubLink="https://github.com/Ricerob/blockchain-spotify-recommender" 
                        tech="Solidity, Hardhat, React"/>
                    </Col>
                    <Col md="auto" data-aos="fade-down">
                    <ProjectCard picture="vue.png" title="Teadex"
                        text="Planned to be a simple index of tea along with a user system. Live laugh love React!"
                        githubLink="https://github.com/Ricerob/teadex" 
                        tech="Vue, JavaScript"/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="pt-2">
                        <h4 className="text-center">This and more over on 
                        <a id="link-nothing" href="https://github.com/Ricerob" target="_blank" rel="noreferrer noopener"> GitHub!</a></h4>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;