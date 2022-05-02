import { React, useEffect, useRef} from "react";
import './styles/shared.css';
import './styles/home.css';
import { Container, Row, Col, Image } from 'react-bootstrap'
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
                <Row className="px-5 py-3">
                    <Col>
                    <h3>Welcome!</h3>
                    <p>My name is Robby, a student developer. Thanks for looking around!</p>
                    <p>I'm currently interested in Web3 tech and building front-ends. In the past, I've worked with
                        C, Java, assembly, and more. Currently I do most of my out-of-school work in Python and JavaScript.
                    </p>
                    <p>
                        Feel free to snoop around to see my projects. Please reach out - I love meeting new people!
                    </p>
                    </Col>
                    <Col xs lg="2">
                    <Image fluid id="home-selfie" roundedCircle src="/selfie.JPG"></Image>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    );
}

export default Home;