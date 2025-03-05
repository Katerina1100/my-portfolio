import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const projects = [
  {
    title: "My first JavaScript project",
    link: "https://katerina1100.github.io/City_Information_Project_JS/",
    
  },
  {
    title: "My first React project",
    link: "https://task-tracker-katerina.netlify.app/",
    
  },
];

const Projects = () => {
  return (
    <Container id="projects" className="py-5" >
      <h2 className="title">My Projects</h2>
      <Row >
        {projects.map((project, index) => (
          <Col key={index} md={6} className="p-2">
            <Card  className="card ">
              <Card.Body className="card-body">
                <Card.Title >
                  <a className="projectss"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
