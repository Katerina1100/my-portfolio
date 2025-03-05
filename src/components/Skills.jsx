import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const skills = [
  { imgSrc: "html.webp" },
  {  imgSrc: "/css-3.webp" },
  { imgSrc: "js.webp" },
  { imgSrc: "/react.webp" },
  { imgSrc: "/bootstrap.webp" },
  {  imgSrc: "/tailwind.webp" },
  {  imgSrc: "/git.webp" },
  {  imgSrc: "/github.webp" },
  {  imgSrc: "/nodejs.webp" },
];

const Skills = () => {
  return (
    <Container id="skills" className="py-5">
      <h2 className="title">My Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col key={index} md={4} className="p-2">
            <div className="p-3 skill text-center">
              <img src={skill.imgSrc}  className="img-fluid" style={{ maxWidth: "100px", height: "auto" }} />
              <p>{skill.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
