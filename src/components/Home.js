import { React, useEffect, useRef} from "react";
import './styles/shared.css';
import './styles/home.css';
import { Container, Row, Col } from 'react-bootstrap'
import Typed from "typed.js";
import LazyHero from "react-lazy-hero/lib/LazyHero";

function Home() {
    const ren = useRef(null);

    useEffect(() => {
        const typed = new Typed(ren.current, {
            strings: ["programming", "learning", "building", "saving the world with code!"],
            startDelay: 300,
            typeSpeed: 60,
            backSpeed: 50,
            backDelay: 1000,
        });

        return () => {typed.destroy();};
    }, []);

    return (
        <Container fluid className="flex-wrapper px-0">
            <Container fluid id="hero-container">
                <Row>
                    <LazyHero imageSrc="/hero2.jpg" color="#FFE8D6" opacity={0.4}
                        transitionDuration={800} transitionTimingFunction="ease-in-out"
                        parallaxOffset={10}
                        />
                </Row>
            </Container>
            <Container className="typer my-4">
                <Row className="blurb-container">
                    <Col>
                        <h3 className="robby-is">Robby is <b><span id="typed-span" ref={ren}></span></b></h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="intro-container">
                
            </Container>
        </Container>
        
    );
}

export default Home;