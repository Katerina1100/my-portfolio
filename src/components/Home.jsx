import React from "react";
import myPhoto from "../assets/katerinaT.png"; // промени го името според твојата слика
import { Container, Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center mt-5 home">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="mb-4 ">Hello, I'm Katerina Trajkovska</h1>
          <p>Junior Front-End Developer</p>
        </Col>
        <Col md={6}>
          <Image className="photo" src={myPhoto} roundedCircle fluid width={350} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
