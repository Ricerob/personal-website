import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ picture, title, text, githubLink}) => {
    return(
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top"/>
                <Card.Body>
                    <Card.Img variant="top" src={picture}/>
                    <Card.Title className="pt-2">{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button className="button-bootstrap" variant="Success">
                    <a className="link-in-button" href={githubLink} target="_blank" rel="noreferrer noopener" >GitHub</a></Button>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;